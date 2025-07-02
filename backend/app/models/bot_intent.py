from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base


class BotIntent(Base):
    __tablename__ = "bot_intents"

    id = Column(Integer, primary_key=True, index=True)
    intent_name = Column(String, nullable=False)
    response = Column(String, nullable=False)

    client_id = Column(Integer, ForeignKey("clients.id"))
    client = relationship("Client", back_populates="intents")
