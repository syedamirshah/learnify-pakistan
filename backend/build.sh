#!/usr/bin/env bash
# build.sh - Render.com Django deploy script

echo "🔧 Applying migrations..."
python manage.py migrate

echo "🔍 Collecting static files..."
python manage.py collectstatic --noinput

echo "✅ Build completed successfully!"
