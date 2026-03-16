# build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# servidor nginx
FROM nginx:alpine

COPY --from=build /app/dist/projeto-juridico/browser/. /usr/share/nginx/html/

EXPOSE 80