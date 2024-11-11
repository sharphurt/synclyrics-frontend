FROM node:18 as build

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
ENV HTTPS=true
ENV SSL_CRT_FILE=./ssl/sharphurt.ru.crt
ENV SSL_KEY_FILE=./ssl/sharphurt.ru.key
RUN npm ci
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html