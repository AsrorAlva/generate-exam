from app.extensions.db import db
from datetime import datetime

class Question(db.Model):
    __tablename__ = "questions"

    id = db.Column(db.Integer, primary_key=True)
    exam_version_id = db.Column(db.Integer, db.ForeignKey("exam_versions.id"))
    indikator_id = db.Column(db.Integer, db.ForeignKey("indikator.id"))
    question_bank_id = db.Column(db.Integer, db.ForeignKey("question_bank.id"))

    type = db.Column(
        db.Enum("PG", "ESSAY"),
        nullable=False
    )

    question_text = db.Column(db.Text, nullable=False)

    correct_answer = db.Column(db.Text, nullable=True)

    explanation = db.Column(db.Text, nullable=True)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)