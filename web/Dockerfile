FROM node:11

WORKDIR /app

COPY package.json ./package.json

RUN yarn

COPY . .

EXPOSE 3000

CMD ["/bin/sh", "-l", "-c", "npm start"]