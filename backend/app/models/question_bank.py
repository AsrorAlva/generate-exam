from app.extensions.db import db
from datetime import datetime

class QuestionBank(db.Model):
    __tablename__ = "question_bank"

    id = db.Column(db.Integer, primary_key=True)
    indikator_id = db.Column(db.Integer, db.ForeignKey("indikator.id"))

    type = db.Column(db.Enum("pg","essay"))

    question_text = db.Column(db.Text)
    correct_answer = db.Column(db.Text)
    explanation = db.Column(db.Text)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)