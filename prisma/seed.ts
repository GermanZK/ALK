import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Вода минеральная",
        description: "Газированная минеральная вода.",
        price: 6900,
        category: "water",
        volumeMl: 1500,
      },
      {
        name: "Вода негазированная",
        description: "Негазированная питьевая вода.",
        price: 5200,
        category: "water",
        volumeMl: 1000,
      },
      {
        name: "Сок апельсиновый",
        description: "Освежающий сок из спелых апельсинов.",
        price: 8900,
        category: "juice",
        volumeMl: 1000,
      },
      {
        name: "Энергетический напиток",
        description: "С кофеином и витаминами.",
        price: 12900,
        category: "energy",
        volumeMl: 500,
      },
      {
        name: "Лимонад клубничный",
        description: "Легкий сладкий лимонад.",
        price: 7500,
        category: "soda",
        volumeMl: 500,
      },
      {
        name: "Пиво светлое",
        description: "Классическое светлое пиво.",
        price: 11900,
        category: "beer",
        volumeMl: 500,
        alcoholPercent: 4.7,
      },
      {
        name: "Пиво крафтовое IPA",
        description: "Горькое крафтовое пиво.",
        price: 18900,
        category: "beer",
        volumeMl: 500,
        alcoholPercent: 6.2,
      },
      {
        name: "Чай холодный персиковый",
        description: "Холодный чай со вкусом персика.",
        price: 7900,
        category: "tea",
        volumeMl: 500,
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
