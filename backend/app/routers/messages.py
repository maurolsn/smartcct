from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Message])
def read_messages(db: Session = Depends(get_db)):
    return crud.get_messages(db)

@router.post("/", response_model=schemas.Message)
def create_message(message: schemas.MessageCreate, db: Session = Depends(get_db)):
    return crud.create_message(db, message)

@router.put("/{message_id}", response_model=schemas.Message)
def update_message(message_id: int, message: schemas.MessageUpdate, db: Session = Depends(get_db)):
    return crud.update_message(db, message_id, message)

@router.delete("/{message_id}")
def delete_message(message_id: int, db: Session = Depends(get_db)):
    return crud.delete_message(db, message_id)