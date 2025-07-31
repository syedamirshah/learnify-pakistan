#!/usr/bin/env bash
# build.sh - Render.com Django deploy script

# ✅ Use correct Python version
export PYTHON_VERSION=3.11.9

# ✅ Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# ✅ Apply migrations
echo "🔧 Applying migrations..."
python manage.py migrate

# ✅ Collect static files
echo "🔍 Collecting static files..."
python manage.py collectstatic --noinput

echo "✅ Build completed successfully!"
