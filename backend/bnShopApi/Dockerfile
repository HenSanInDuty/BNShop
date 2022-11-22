# pull official base image
FROM python:3.10.8-alpine

RUN apk update
RUN apk add build-base
RUN apk add --no-cache gcc
RUN apk add --no-cache libpq-dev
RUN apk add --no-cache python3-dev
RUN apk add --no-cache postgresql-dev
RUN apk add --no-cache musl-dev

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]