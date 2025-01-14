FROM node:16

WORKDIR /kubernetes/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]