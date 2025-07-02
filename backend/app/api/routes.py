from fastapi import APIRouter, Depends
from app.api import auth
from app.core.deps import get_current_user
from app.models.user import User


router = APIRouter()

# Rota pública
@router.get("/ping")
def ping():
    return {"status": "ok"}

# Rota protegida
@router.get("/me")
def read_users_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "name": current_user.name,
        "client_id": current_user.client_id
    }

# Inclui o módulo de autenticação
router.include_router(auth.router)
