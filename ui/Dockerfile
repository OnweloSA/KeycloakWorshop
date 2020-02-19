FROM nginx:latest

ADD nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/nginx/html/ui

COPY dist/ui/ /usr/share/nginx/html/ui
