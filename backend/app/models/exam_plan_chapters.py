from app.extensions.db import db
from datetime import datetime

class ExamPlanChapter(db.Model):
    __tablename__ = "exam_plan_chapters"

    id = db.Column(db.Integer, primary_key=True)
    exam_plan_id = db.Column(db.Integer, db.ForeignKey("exam_plans.id"))
    bab_id = db.Column(db.Integer, db.ForeignKey("bab.id"))

    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)