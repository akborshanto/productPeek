import React, { useEffect, useState } from "react";
import useAxiosPublic from "./../../hook/AxiosInstance";
import axios from "axios";

export const Item = () => {
  const axiosSecure = useAxiosPublic();
  const [products, setProducts] = useState([]); // প্রোডাক্টস ডেটা স্টোর করার জন্য স্টেট
  const [searchQuery, setSearchQuery] = useState(""); // সার্চ কুইরি স্টোর করার জন্য স্টেট
  const [sortField, setSortField] = useState("price"); // সোর্টিং এর ফিল্ড স্টোর করার জন্য স্টেট
  const [sortOrder, setSortOrder] = useState("asc"); // সোর্টিং এর অর্ডার স্টোর করার জন্য স্টেট
  const [page, setPage] = useState(1); // পেজ নাম্বার স্টোর করার জন্য স্টেট
  const [minPrice, setMinPrice] = useState(0); // মিনিমাম প্রাইস স্টোর করার জন্য স্টেট
  const [maxPrice, setMaxPrice] = useState(1000); // ম্যাক্সিমাম প্রাইস স্টোর করার জন্য স্টেট
  const [totalPages, setTotalPages] = useState(1);
  console.log(products);
console.log(searchQuery)
  {
    /* get thte data from pdoduct collection database */
  }


  {
    /* handle seacth */
  }
  const handleSearch =async (e) => {

    await axios.get(`https://productpeek-rust.vercel.app/item-products?q=${searchQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
.then(data=>setProducts(data))

    // সার্চ ইনপুট আপডেট
  };

  const handleSortChange = (e) => {
    setSortField(e.target.value); // সোর্টিং ফিল্ড আপডেট
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value); // সোর্টিং অর্ডার আপডেট
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value); // মিনিমাম প্রাইস আপডেট
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value); // ম্যাক্সিমাম প্রাইস আপডেট
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div>
      {/* seach input */}

      <div>
        <input
          className=" bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 w-56"
          autocomplete="off"
          placeholder="Search product..."
          name="text"
          type="text"
          value={searchQuery}
     onChange={(e)=>setSearchQuery(e.target.value)}
        />

        <button onClick={handleSearch}>Seacth</button>
      </div>
      {/* sort  */}
      <select
        id="category"
        onChange={handleSortChange}
        value={sortField}
        className="bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg my-4 focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 w-56"
      >
        SOrt BY:
        <option value="Price" className="">
          {" "}
          Price
        </option>
        <option value="name"> Name</option>
      </select>

      {/* sorting assending */}
      <div>
        <select
          value={sortField}
          onChange={handleOrderChange}
          className=" bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 w-56"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {/* min andk max */}
      <div>
        <div>
          <label className="text-xl bold">Min Price:</label>
          <input
            className="bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 w-40 my-4"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <br />
          <label>Max Price:</label>
          <input
            className="bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 w-40"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      {/* pagination */}

      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="btn  bg-[#fb5200] text-white"
        >
          {" "}
          Prev
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          className="btn  bg-[#fb5200] text-white"
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};
