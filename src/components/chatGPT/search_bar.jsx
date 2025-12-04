import React from 'react'
import { FaPlus } from "react-icons/fa6";
function SearchBar() {
  return (
    <div className="absolute w-3/4 bottom-20 left-1/2 transform -translate-x-1/2 bg-[#414141] ">
      <input
        type="text"
        placeholder="Search..."
        className="border-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className=" text-white rounded-r-md p-2">
        Search
      </button>
      <div>
          <FaPlus className="inline-block text-white" />
      </div>
</div>
  )
}

export default SearchBar