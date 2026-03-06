from app.extensions.db import db
from datetime import datetime

class ExamVersion(db.Model):
    __tablename__ = "exam_versions"

    id = db.Column(db.Integer, primary_key=True)
    exam_plan_id = db.Column(db.Integer, db.ForeignKey("exam_plans.id"))

    material_version = db.Column(db.Integer, nullable=False)

    title = db.Column(db.String(255), nullable=False)

    total_pg = db.Column(db.Integer, default=0)
    total_essay = db.Column(db.Integer, default=0)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)