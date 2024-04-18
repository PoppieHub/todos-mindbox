FROM node:21.7.3-alpine3.19

WORKDIR /data/todos-mindbox.client/

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Определяем команду по умолчанию для запуска приложения
CMD ["npm", "start"]