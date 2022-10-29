import Image from "next/image";

async function getDetailPostingan(id) {
  const detailPostingan = await fetch("https://dummyjson.com/products/" + id);

  return detailPostingan.json();
}

const myLoader = (id) => {
  return `https://dummyjson.com/image/i/products/${id}/1.jpg`;
};

export default async function page({ params }) {
  const detail = await getDetailPostingan(params.id);

  return (
    <div>
      {/* <img
        src={detail.images[0]}
        alt={detail.images[2]}
        width={400}
        height={600}
        style={myImage}
      /> */}
      <Image
        src={detail.images[0]}
        alt={detail.images[2]}
        width={400}
        height={600}
        style={myImage}
      />
      <p>Brand: {detail.brand}</p>
      <p>Category: {detail.category}</p>
      <p>Type: {detail.title}</p>
      <p>Rating: {detail.rating}</p>
      <p>Stock: {detail.stock}</p>
      <p>Price: {detail.price}</p>
      <p>Description: {detail.description}</p>
    </div>
  );
}

const myImage = {
  objectFit: "cover",
};
