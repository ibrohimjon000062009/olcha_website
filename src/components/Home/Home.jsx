import ProductCard from "../ProductCard/Product";

function Home() {
  const data = [
     {
    id: 1,
    badge: -9,
    title: "Xiaomi Redmi Note 14 Pro",
    price: "3 309 000",
    old: "3 609 000",
  },
]; 
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {data.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </div>
  );
}

export default Home
