#build
FROM node:16
WORKDIR /nestbackend
COPY package*.json ./
RUN npm install
COPY . .
CMD node server.js

#serve
FROM fholzer/nginx-brotli:v1.12.2
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /nest_frontend/build /usr/share/nginx/html
EXPOSE 7777
CMD ["nginx","-g","daemon off;"]