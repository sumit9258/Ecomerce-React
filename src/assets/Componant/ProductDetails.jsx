import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "./Loading";

function ProductDetails() {
    
    const {id}=useParams();
    const [Data,setData]=useState({})
const [Loadinggif,setLoadinggif]=useState(true)

    const Fulldetail=async()=>{
        try {
            let res=await fetch(`https://dummyjson.com/products/${id}`)
let resdata=await res.json()
console.log(resdata);
setLoadinggif(false)
setData(resdata)
        } catch (error) {
            console.log(error);
            
        }

    }

    useEffect(()=>{
Fulldetail()
    },[])

    if (Loadinggif) {
        return <Loading/>
    }

    return(
        <>
 <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center items-center">
          <img
            src={Data.thumbnail}
            alt={Data.title}
            className="w-full max-h-[400px] object-contain rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{Data.title}</h1>
          <p className="text-gray-700 mb-4">{Data.description}</p>
          <div className="mb-4">
            <span className="text-green-600 text-2xl font-bold">${Data.price}</span>
            <span className="ml-4 text-sm text-gray-500">Rating: {Data.rating} ⭐</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">Brand: {Data.brand}</p>
          <p className="text-sm text-gray-600 mb-6">Category: {Data.category}</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>

        </>
    )
}

export default ProductDetails