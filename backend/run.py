from flask import Flask
from app.config import Config

from app.extensions.db import db
from app.extensions.migrate import migrate

# IMPORT MODELS
import app.models.user
import app.models.mapel
import app.models.user_subject
import app.models.materi
import app.models.bab
import app.models.indikator
import app.models.exam_plans
import app.models.exam_plan_chapters
import app.models.exam_versions
import app.models.question_bank
import app.models.questions
import app.models.question_options
import app.models.generation_logs
import app.models.activity_logs

def create_app():

    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    return app


app = create_app()