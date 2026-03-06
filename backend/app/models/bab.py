from app.extensions.db import db
from datetime import datetime

class Bab(db.Model):
    __tablename__ = "bab"

    id = db.Column(db.Integer, primary_key=True)
    materi_id = db.Column(db.Integer, db.ForeignKey("materi.id"))

    title = db.Column(db.String(200))
    content = db.Column(db.Text)
    summary = db.Column(db.Text)
    reference_text = db.Column(db.Text)

    order_number = db.Column(db.Integer)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)