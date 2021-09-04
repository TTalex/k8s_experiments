FROM node:15.3.0

COPY package.json .
COPY server.js .

RUN npm install

EXPOSE 8080

CMD node server.js
