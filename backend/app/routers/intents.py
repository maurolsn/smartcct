from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Intent])
def read_intents(db: Session = Depends(get_db)):
    return crud.get_intents(db)

@router.post("/", response_model=schemas.Intent)
def create_intent(intent: schemas.IntentCreate, db: Session = Depends(get_db)):
    return crud.create_intent(db, intent)

@router.put("/{intent_id}", response_model=schemas.Intent)
def update_intent(intent_id: int, intent: schemas.IntentUpdate, db: Session = Depends(get_db)):
    return crud.update_intent(db, intent_id, intent)

@router.delete("/{intent_id}")
def delete_intent(intent_id: int, db: Session = Depends(get_db)):
    return crud.delete_intent(db, intent_id)