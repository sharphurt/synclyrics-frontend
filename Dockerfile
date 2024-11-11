FROM node:18

#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#ENV HTTPS=true
#ENV SSL_CRT_FILE=./ssl/sharphurt.ru.crt
#ENV SSL_KEY_FILE=./ssl/sharphurt.ru.key
#EXPOSE 3000
#CMD ["npm", "start"]

WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build
COPY --from=build /usr/app/dist /usr/share/nginx/html