from app.extensions.db import db
from datetime import datetime

class Indikator(db.Model):
    __tablename__ = "indikator"

    id = db.Column(db.Integer, primary_key=True)
    bab_id = db.Column(db.Integer, db.ForeignKey("bab.id"))

    description = db.Column(db.Text)
    cognitive_level = db.Column(db.Enum("C1","C2","C3","C4","C5","C6"))

    allow_pg = db.Column(db.Boolean)
    allow_essay = db.Column(db.Boolean)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)