from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Conversation])
def read_conversations(db: Session = Depends(get_db)):
    return crud.get_conversations(db)

@router.post("/", response_model=schemas.Conversation)
def create_conversation(conversation: schemas.ConversationCreate, db: Session = Depends(get_db)):
    return crud.create_conversation(db, conversation)

@router.put("/{conversation_id}", response_model=schemas.Conversation)
def update_conversation(conversation_id: int, conversation: schemas.ConversationUpdate, db: Session = Depends(get_db)):
    return crud.update_conversation(db, conversation_id, conversation)

@router.delete("/{conversation_id}")
def delete_conversation(conversation_id: int, db: Session = Depends(get_db)):
    return crud.delete_conversation(db, conversation_id)