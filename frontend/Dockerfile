# Compile and Build angular codebase
FROM node:10-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

# Serve app with nginx server
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/product-frontend /usr/share/nginx/html
EXPOSE 80
# FROM node:alpine
# RUN apk update && apk add --no-cache make git

# WORKDIR /frontend

# COPY package.json package-lock.json /frontend/

# RUN npm i npm@latest -g && \
#     npm install -g @angular/cli@7.3.9

# RUN chown -R node /frontend

# WORKDIR /frontend

# USER node

# RUN npm install
# EXPOSE 4200