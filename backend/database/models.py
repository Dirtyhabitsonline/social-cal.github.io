from sqlalchemy import Column, Integer, String, DateTime, Boolean, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from ..config import settings

Base = declarative_base()

class Event(Base):
    __tablename__ = "events"
    
    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
    location = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    image_url = Column(String, nullable=True)
    source_url = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    published_wp = Column(Boolean, default=False)
    published_mailchimp = Column(Boolean, default=False)

engine = create_engine(settings.DATABASE_URL)
Base.metadata.create_all(engine)

SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()