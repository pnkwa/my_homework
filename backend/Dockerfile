FROM node:20.13

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3040

CMD ["node", "index.js"]
