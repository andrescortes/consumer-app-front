FROM node:20.19-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-prod

FROM nginx:alpine3.21-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/consumer-app-front/browser /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
