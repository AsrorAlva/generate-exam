from app.extensions.db import db
from datetime import datetime

class Materi(db.Model):
    __tablename__ = "materi"

    id = db.Column(db.Integer, primary_key=True)
    mapel_id = db.Column(db.Integer, db.ForeignKey("mapel.id"))

    kelas = db.Column(db.Integer)
    semester = db.Column(db.Enum("ganjil","genap"))
    versi = db.Column(db.Integer)
    status = db.Column(db.Enum("draft","published"))
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)