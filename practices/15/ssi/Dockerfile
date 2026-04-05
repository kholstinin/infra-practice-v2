FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf.template /etc/nginx/templates/default.conf.template

COPY index.html /usr/share/nginx/html/index.html
