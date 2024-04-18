#!/bin/bash

# Функция для сравнения версий Node.js
function version_gt() { test "$(printf '%s\n' "$@" | sort -V | head -n 1)" != "$1"; }

# Получить текущую версию Node.js
current_node_version=$(node -v)
echo "Текущая версия Node.js: $current_node_version"

# Проверить, удовлетворяет ли версия условию
required_version="v21.7.0"
if version_gt "$current_node_version" "$required_version"; then
    echo "Версия Node.js $current_node_version удовлетворяет условию >= ($required_version)"

    echo "Выполняем установку зависимостей"
    cd ./app/client/ && npm install
    echo "Выполняем сборку"
    npm run build ./app/client/

    echo "Запускаем docker-compose..."
    cd ../../ && docker-compose up -d
else
    echo "Версия Node.js $current_node_version не удовлетворяет условию >= ($required_version)"
    echo "Запуск отменен!"
fi
