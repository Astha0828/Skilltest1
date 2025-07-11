FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
ENV ENVIRONMENT=production
EXPOSE 5001
CMD ["python", "app.py"]