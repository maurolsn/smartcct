from fastapi import APIRouter
from . import users, clients, conversations, messages, intents

router = APIRouter()

router.include_router(users.router, prefix="/users", tags=["Users"])
router.include_router(clients.router, prefix="/clients", tags=["Clients"])
router.include_router(conversations.router, prefix="/conversations", tags=["Conversations"])
router.include_router(messages.router, prefix="/messages", tags=["Messages"])
router.include_router(intents.router, prefix="/intents", tags=["Intents"])