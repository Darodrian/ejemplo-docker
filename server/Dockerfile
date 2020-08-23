FROM node:alpine

WORKDIR /server

COPY package.json package.json
RUN npm install

COPY . .

CMD ["/bin/sh", "-c", "-l", "npm start"]