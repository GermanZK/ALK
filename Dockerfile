# Используем стабильную LTS-версию Node.js
FROM node:20

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем только package-файлы (для кэширования слоёв)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Открываем порт Next.js
EXPOSE 3000

# Запуск dev-сервера
CMD ["npm", "run", "dev"]

