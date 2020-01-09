FROM nginx:stable-alpine as production-stage
COPY ./nginx_config/default.conf /etc/nginx/conf.d/default.conf
COPY /dist/mundo-naturali /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
