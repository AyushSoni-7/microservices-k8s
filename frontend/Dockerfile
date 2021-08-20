# Compile and Build angular codebase
FROM node:10-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

# Serve app with nginx server
FROM nginx:alpine
COPY --from=build /app/dist/product-frontend /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
EXPOSE 80
