from app.extensions.db import db
from datetime import datetime

class ExamPlan(db.Model):
    __tablename__ = "exam_plans"

    id = db.Column(db.Integer, primary_key=True)
    materi_id = db.Column(db.Integer, db.ForeignKey("materi.id"))

    name = db.Column(db.String(200))
    type = db.Column(db.Enum("UH","UTS","UAS","TRYOUT"))
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)