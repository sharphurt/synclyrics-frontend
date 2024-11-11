FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

