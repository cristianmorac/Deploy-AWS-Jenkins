from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str

class UserOut(UserCreate):
    id: int
