FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y nginx

# Копируем конфигурацию nginx в правильную директорию
COPY ./hosts/todos-mindbox.client.conf /etc/nginx/sites-enabled/todos-mindbox.client.conf

# Указываем рабочую директорию (необязательно)
WORKDIR /data

VOLUME /data

# Открываем порт 80 для nginx
EXPOSE 80

# Команда для запуска nginx в режиме daemon off
CMD ["nginx", "-g", "daemon off;"]
