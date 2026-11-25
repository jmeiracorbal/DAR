# Stage 1: build the static site with Eleventy
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY eleventy.config.js ./
COPY src ./src
RUN npm run build

# Stage 2: serve the generated HTML with nginx
FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/_site /usr/share/nginx/html
EXPOSE 80
