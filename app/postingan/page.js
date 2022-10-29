import Link from "next/link";

async function ambilPostingan() {
  const products = await fetch("https://dummyjson.com/products?limit=5");
  return products.json();
}

export default async function layout({ children }) {
  const data = await ambilPostingan();
  const phones = data.products;

  return (
    <div>
      <h1>List Handphone</h1>
      {phones.map((phone) => {
        return (
          <div key={phone.id}>
            <h4>
              <Link href={`/postingan/${phone.id}`}>
                {phone.id} - {phone.title}
              </Link>
            </h4>
            <p>{phone.description}</p>
          </div>
        );
      })}
    </div>
  );
}
