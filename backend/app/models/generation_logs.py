from app.extensions.db import db
from datetime import datetime

class GenerationLog(db.Model):
    __tablename__ = "generation_logs"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    indikator_id = db.Column(db.Integer, db.ForeignKey("indikator.id"))
    exam_version_id = db.Column(db.Integer, db.ForeignKey("exam_versions.id"))
    
    prompt = db.Column(db.Text, nullable=True)

    response = db.Column(db.Text, nullable=True)

    status = db.Column(
        db.Enum("success", "failed"),
        default="success"
    )

    model_name = db.Column(db.String(100), nullable=True)
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)