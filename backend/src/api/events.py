from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from ..core.database import get_db
from ..schemas.event import Event
from ..repositories.event_repository import EventRepository

router = APIRouter()

@router.get("/events/", response_model=List[Event])
async def get_events(db: Session = Depends(get_db)):
    repository = EventRepository(db)
    return await repository.get_all()