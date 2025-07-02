import os
from sqlalchemy import create_engine

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise Exception("❌ DATABASE_URL não encontrada no ambiente!")

try:
    engine = create_engine(DATABASE_URL)
    with engine.connect() as conn:
        print("✅ Conectado com sucesso ao banco de dados!")
except Exception as e:
    print("❌ Erro na conexão com o banco:")
    print(e)
