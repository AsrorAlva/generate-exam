from app.extensions.db import db
from datetime import datetime

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    email = db.Column(db.String(100))
    fullname = db.Column(db.String(150))
    password = db.Column(db.String(255))
    role = db.Column(db.Enum("admin", "guru"))



    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)