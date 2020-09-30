FROM node:14.7.0-alpine

WORKDIR /var/www/storybook

COPY ./package*.json ./

RUN apk add --no-cache git

RUN npm install
