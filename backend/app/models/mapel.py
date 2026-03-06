from app.extensions.db import db
from datetime import datetime

class Mapel(db.Model):
    __tablename__ = "mapel"

    id = db.Column(db.Integer, primary_key=True)
    nama_mapel = db.Column(db.String(100))
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)