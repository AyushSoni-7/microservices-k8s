FROM python:3.8.3-slim-buster
WORKDIR /app
COPY requirements.txt .
RUN apt-get update && \
 apt-get install -y libpq-dev  gcc 
RUN python3 -m pip install -r requirements.txt 
COPY . .
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
EXPOSE 5000
