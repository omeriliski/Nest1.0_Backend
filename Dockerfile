#build
FROM node:16
WORKDIR /nestbackend
COPY package*.json ./
RUN npm install
COPY . .
CMD node server.js