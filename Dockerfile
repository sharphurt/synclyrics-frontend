FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV HTTPS=true
ENV SSL_CRT_FILE=/etc/ssl/sharphurt.ru.crt
ENV SSL_KEY_FILE=/etc/ssl/sharphurt.ru.key
EXPOSE 3000
CMD ["npm", "start"]