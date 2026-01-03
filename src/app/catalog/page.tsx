import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 2,
});

const formatPrice = (price: number) => priceFormatter.format(price / 100);

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section>
      <h1>Каталог</h1>
      {products.length === 0 ? (
        <p>Каталог пуст</p>
      ) : (
        <div style={{ display: "grid", gap: "16px" }}>
          {products.map((product) => (
            <article
              key={product.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <h2>{product.name}</h2>
              <p>{formatPrice(product.price)}</p>
              <p>Категория: {product.category}</p>
              {product.volumeMl ? <p>Объем: {product.volumeMl} мл</p> : null}
              {product.alcoholPercent ? (
                <p>Алкоголь: {product.alcoholPercent}%</p>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
