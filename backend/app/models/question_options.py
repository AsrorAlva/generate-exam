from app.extensions.db import db
from datetime import datetime

class QuestionOptions(db.Model):
    __tablename__ = "question_options"

    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id"))

    option_label = db.Column(db.String(5), nullable=False)   # A, B, C, D
    option_text = db.Column(db.Text, nullable=False)

    is_correct = db.Column(
        db.Boolean,
        nullable=False,
        default=False
    )
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)