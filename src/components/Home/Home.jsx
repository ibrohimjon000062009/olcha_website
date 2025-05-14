import ProductCard from "../ProductCard/Product";
import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";
import phone3 from "../../assets/phone3.png";
import phone4 from "../../assets/phone4.png";
import phone5 from "../../assets/phone5.png";

function Home() {
  const data = [
  { id: 1, badge: "7%", title: "Xiomi Redmi 14C", price: "3 250 000 so'm", old:"4 200 000 so'm", month:"415 000 so'm x 12oy", image: phone1 },
  { id: 2, badge: "13%", title: "Poco X6", price: "5 550 000 so'm", old:"6 000 000 so'm", month:"575 000 so'm x 12oy", image:phone2 },
  { id: 3,title: "Redmi 14C note", price: "3 550 000 so'm", old:"", month:"400 000 so'm x 12oy", image: phone3 },
  { id: 4, badge: "3%", title: "Huwaei X700", price: "4 500 000 so'm", old:"4 700 000 so'm", month:"500 000 so'm x 12oy", image: phone4 },
  { id: 5, title: "Huwaei X700", price: "1 752 000 so'm", month:"179 000 so'm x 12oy", image: phone5 },


    { id: 1, badge: "7%", title: "Xiomi Redmi 14C", price: "3 250 000 so'm", old:"4 200 000 so'm", month:"415 000 so'm x 12oy", image: phone1 },
  { id: 2, badge: "13%", title: "Poco X6", price: "5 550 000 so'm", old:"6 000 000 so'm", month:"575 000 so'm x 12oy", image:phone2 },
  { id: 3,title: "Redmi 14C note", price: "3 550 000 so'm", old:"", month:"400 000 so'm x 12oy", image: phone3 },
  { id: 4, badge: "3%", title: "Huwaei X700", price: "4 500 000 so'm", old:"4 700 000 so'm", month:"500 000 so'm x 12oy", image: phone4 },
  { id: 5, title: "Huwaei X700", price: "1 752 000 so'm", month:"179 000 so'm x 12oy", image: phone5 },
  
]; 
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {data.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </div>
  );
}

export default Home 
