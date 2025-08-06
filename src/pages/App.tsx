import Card from "../components/Card"
import Navbar from "../components/Navbar"
import SamsungImg1 from '../assets/samsungs22.png'
import { Link } from "react-router";
import { useState, useEffect } from "react";
import type { Products } from "../types/dummyjson";
import axios from "axios";


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
  // const [number, setNumber] = useState(0)
  const [data, setData] = useState<Products[]>([])

  // handle plus
  // const handleAdd = () => {
  //   if (number < 10) {
  //     setNumber(value => value + 1)
  //   } else {
  //     alert("gak bisa lebih dari 10 bro")
  //   }
  // }

  // // handle minus
  // const handleMinus = () => {
  //   if (number > 0) {
  //     setNumber(value => value - 1)
  //   }
  // }

  // keduanya sama sama asynchronous

  // promise then catch handling
  // const fetchData = () => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log("luaran json", json)
  //       console.log("daleman json", json.products);
  //       setData(json.products);
  //     })
  //     .catch(error => console.log(error))
  // }

  // try-catch async await
  // const fetchDataAsync = async() => {
  //   try {
  //     const res = await fetch('https://dummyjson.com/products')
  //     const json = await res.json()

  //     setData(json.products)
  //   } catch (error) {
  //     console.log(error)
  //     // alert(`ada error ${error}`)
  //   }
  // }

  // Task : 
  // 1. fetch API from mock data phone

  // Explore
  // 1. Javascript Promise
  // 2. Javascript Asynchronous

  const fetchDataAxios = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products')
      const products = res.data.products
      setData(products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataAxios()
  }, [])

  return (
    <>
      <Navbar />

      {/* <div style={{ display: "flex", width: "100vh", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div>{number}</div>
          <button onClick={handleAdd}>Plus</button>
          <button onClick={handleMinus}>Minus</button>
        </div> */}
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
      <div>
        <div>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <p >{item.title}</p>
                <p>{item.price}</p>
                <p>{item.category}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
