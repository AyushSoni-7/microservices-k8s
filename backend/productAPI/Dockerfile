FROM python:3.8.3-slim-buster
WORKDIR /app
COPY requirements.txt .
RUN python3 -m pip install -r requirements.txt
COPY . . 
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
EXPOSE 5001
