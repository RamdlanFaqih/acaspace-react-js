import Card from "../components/Card"
import Navbar from "../components/Navbar"
import SamsungImg1 from '../assets/samsungs22.png'
import { useState } from 'react'
import { Link } from "react-router";

interface DataProductTypes {
  discount: string,
  productName: string,
  currentPrice: number,
  image: string,
  originalPrice: number,
  savings: string,
}


const dataProduct: DataProductTypes[] = [
  {
    discount: "56%",
    productName: "Galaxy S22 Ultra",
    currentPrice: 32999,
    image: SamsungImg1,
    originalPrice: 74999,
    savings: "Save - ₹32999",
  },
  {
    discount: "56%",
    productName: "Galaxy Note Ultra Plus",
    currentPrice: 32999,
    image: SamsungImg1,
    originalPrice: 74999,
    savings: "Save - ₹32999",
  },
  {
    discount: "56%",
    productName: "Galaxy Note Ultra Plus",
    currentPrice: 32999,
    image: SamsungImg1,
    originalPrice: 74999,
    savings: "Save - ₹32999",
  },
];


function App() {
  // value, set state, and initial state
  const [number, setNumber] = useState(0)

  // handle plus
  const handleAdd = () => {
    if (number < 10) {
      setNumber(value => value + 1)
    } else {
      alert("gak bisa lebih dari 10 bro")
    }
  }

  // handle minus
  const handleMinus = () => {
    if (number > 0) {
      setNumber(value => value - 1)
    }
  }

  return (
    <>
   
      <Navbar />
        <div style={{ display: "flex", width: "100vh", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div>{number}</div>
          <button onClick={handleAdd}>Plus</button>
          <button onClick={handleMinus}>Minus</button>
        </div>
        <div className="product-grid">
          {dataProduct.map((value, index) => {
            return (
              <Link to={"/detail"}>
              <Card
                key={index}
                currentPrice={value.currentPrice}
                discount={value.discount}
                image={value.image}
                originalPrice={value.originalPrice}
                productName={value.productName}
                savings={value.savings}
                />
                </Link>
            )
          })}
        </div>
    </>
  )
}

export default App
