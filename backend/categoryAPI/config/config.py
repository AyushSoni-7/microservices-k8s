import os


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = os.environ.get('secret_key', '')
    POSTGRES_USER = os.environ.get('POSTGRES_USER', 'postgres')
    POSTGRES_PASSWORD = os.environ.get('POSTGRES_PASSWORD', 'postgres')
    POSTGRES_HOST = os.environ.get('POSTGRES_HOST', 'localhost')
    POSTGRES_PORT = os.environ.get('POSTGRES_PORT', '5432')
    POSTGRES_URI = (
        "postgresql://" + POSTGRES_USER + ":" +
        POSTGRES_PASSWORD + "@" + POSTGRES_HOST + ":" + POSTGRES_PORT
        )
    # SQLALCHEMY_DATABASE_URI = os.environ.get(
    #     'POSTGRES_HOST', 'sqlite:///data.db'
    #     )
    SQLALCHEMY_DATABASE_URI = POSTGRES_URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PROPAGATE_EXCEPTIONS = True


class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
