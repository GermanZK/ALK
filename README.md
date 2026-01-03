# ALK

Стартовый каркас проекта ALK на Next.js с TypeScript и Prisma.

## Требования

- Docker
- Docker Compose

## Запуск через docker-compose

```bash
docker-compose up --build
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Prisma (миграции и сид)

После поднятия контейнеров выполните миграции и сид:

```bash
docker-compose exec web npx prisma migrate deploy
docker-compose exec web npx prisma db seed
```

Для разработки можно использовать `migrate dev`:

```bash
docker-compose exec web npx prisma migrate dev
```
