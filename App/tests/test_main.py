from fastapi.testclient import TestClient
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app.main import app

client = TestClient(app)

def test_create_and_read_users():
    response = client.post("/users/", json={"name": "Alice"})
    assert response.status_code == 200
    assert response.json()["name"] == "Alice"

    response = client.get("/users/")
    assert response.status_code == 200
    assert any(user["name"] == "Alice" for user in response.json())
