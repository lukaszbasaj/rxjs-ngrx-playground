import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const items =
  [
    {
      "name": "T-Shirt",
      "description": "Great fit, super comfy",
      "image": "https://i.imgur.com/KeQtXT3.png",
      "price": 25,
      "sku": "123"
    },
    {
      "name": "Sweater",
      "description": "Awesome for cold days",
      "image": "https://i.imgur.com/fVpadKg.png",
      "price": 50,
      "sku": "456"
    },
    {
      "name": "Button Down",
      "description": "A little fancier",
      "image": "https://i.imgur.com/JxGBvyj.png",
      "price": 30,
      "sku": "789"
    }
  ];

async function main() {
  for (let item of items) {
    await prisma.product.create({ data: item });
  }
}

main().catch(err => {
  console.log(err);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
})