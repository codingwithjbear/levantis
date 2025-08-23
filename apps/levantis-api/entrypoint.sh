#!/bin/sh
set -e

# Ensure static/media dirs exist & are writable by appuser
mkdir -p /app/staticfiles /app/mediafiles
chown -R appuser:appuser /app/staticfiles /app/mediafiles

echo "Waiting for DB $POSTGRES_USER@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB"
python - <<'PY'
import os, time, psycopg2
host=os.getenv("POSTGRES_HOST","db")
port=int(os.getenv("POSTGRES_PORT","5432"))
user=os.getenv("POSTGRES_USER","postgres")
pwd=os.getenv("POSTGRES_PASSWORD")
db=os.getenv("POSTGRES_DB","postgres")
for i in range(120):
    try:
        psycopg2.connect(host=host, port=port, user=user, password=pwd, dbname=db).close()
        print("DB ready")
        break
    except Exception as e:
        print(f"DB not ready ({i+1}s):", e)
        time.sleep(1)
else:
    raise SystemExit("Database not ready")
PY

# Run Django maintenance as appuser (now that paths are owned)
su -s /bin/sh -c "python manage.py collectstatic --noinput" appuser
su -s /bin/sh -c "python manage.py migrate --noinput" appuser

# Launch Gunicorn as appuser
exec su -s /bin/sh -c "gunicorn config.wsgi:application -c /app/gunicorn.conf.py" appuser