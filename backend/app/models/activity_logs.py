from app.extensions.db import db
from datetime import datetime

class ActivityLog(db.Model):
    __tablename__ = "activity_logs"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id", ondelete="SET NULL"),
        nullable=True
    )

    action = db.Column(
        db.String(100),
        nullable=False
    )

    table_name = db.Column(
        db.String(100),
        nullable=True
    )

    record_id = db.Column(
        db.Integer,
        nullable=True
    )

    description = db.Column(
        db.Text,
        nullable=True
    )
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)