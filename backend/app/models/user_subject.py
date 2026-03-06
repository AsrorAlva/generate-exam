from app.extensions.db import db
from datetime import datetime

class UserSubject(db.Model):
    __tablename__ = "user_subject"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    mapel_id = db.Column(db.Integer, db.ForeignKey("mapel.id"))
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)