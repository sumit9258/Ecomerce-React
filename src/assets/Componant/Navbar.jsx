import { Link } from "react-router-dom";

function Navbar() {
    
    return(
        <>
         <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex-shrink-0 text-2xl font-bold text-yellow-600">
    Blinkit
      </div>

      {/* Center: Search Box */}
      <div className="flex-grow mx-4">
        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-1 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-1 hover:bg-green-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Right: Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        {/* <a href="#" className="hover:text-blue-600">Home</a> */}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <a href="#" className="hover:text-blue-600">Products</a>
        <a href="#" className="hover:text-blue-600">Cart</a>
      </div>
    </nav>
        </>
    )

}



export default Navbar;