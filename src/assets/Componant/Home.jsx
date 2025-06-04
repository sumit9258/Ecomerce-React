import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const [data, setData] = useState([]);
  const [Loadinggif, setLoadinggif] = useState(true);

  const ApiFetch = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");
      let resdata = await res.json();
      setLoadinggif(false);
      setData(resdata.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ApiFetch();
  }, []);

  if (Loadinggif) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-500 text-sm truncate">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-bold text-lg">$ {item.price}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
