import React, { useEffect, useState } from "react";
import { UseTitle } from "../../hook/UseTitle";
import useAxiosPublic from "./../../hook/AxiosInstance";
import Card from "../../component/Card";
import { useLoaderData } from "react-router-dom";
import { Loading } from "../../component/shared/Loading";

const Product = () => {
  const axiosSecure = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [pagiData, setPagiData] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  {
    /* fetch all product data */
  }

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/allProduct")
      .then((res) => {
        setAllProducts(res.data);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  /* pagination */
  {
    /* sort funciton ality */
  }
  const [sort, setSort] = useState("");
  const sortProducts = [...allProducts].sort((a, b) => {
    if (sort === "low-to-high") {
      return a.price - b.price;
    } else if (sort === "high-to-low") {
      return b.price - a.price;
    } else if (sort === "newest-first") {
      return new Date(b.productCreationDate) - new Date(a.productCreationDate);
    }

    return 0;
  });

  /* search funtioality */
  const [search, setSearch] = useState("");
  const serachFilter = sortProducts?.filter((product) =>
    product?.productName.toLowerCase().includes(search.toLowerCase())
  );
  {
    /* category  */
  }
  const [selectCategory, setSelectCategory] = useState("");
  const categoryFilter = serachFilter.filter(
    (categoryPd) =>
      selectCategory === " " || categoryPd.category === selectCategory
  );

  const categoryMap = [
    ...new Set(allProducts.map((product) => product.category)),
  ];

  {
    /*min max   */
  }
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const [filterPrice, setFilterPrice] = useState(null);
  const handleFilter = (e) => {
    e.preventDefault();

    const formDate = new FormData(e.target);
    const minPrice = Number(formDate.get("minPrice"));
    const maxPrice = Number(formDate.get("maxPrice"));

    const PriceFilterRange = allProducts.filter((priceRange) => {
      //if minPirce
      return priceRange.price > minPrice && priceRange.price < maxPrice;
    });

    setAllProducts(PriceFilterRange);
  };
  {
    /* hadnle reselt */
  }
  const hadleReset = () => {
    setSearch("");

    setMaxPrice(0);
    setMinPrice(0);
    setSort("");
  };

  /* oagination */
  const { count } = useLoaderData() || {};
  const [itemrPerPage, setItemPerapge] = useState(10);
  // const pages = [];
  const numberOfPages = Math.ceil(count / itemrPerPage);
const [currentPage,setCurrentPage]=useState(0)
  // for (let i = 1; i < numberOfPages; i++) {
  //   pages.push(i);
  // }
  const pages = [...Array(numberOfPages).keys()];
  const handlePerPage = (e) => {
    console.log(e.target.value);

    const val = parseInt(e.target.value);
    setItemPerapge(val);
    setCurrentPage(0)
  };



const handlePrev=()=>{

  if(currentPage > 0){
    setCurrentPage(currentPage - 1)
  }
}

const handleNext=()=>{

if(currentPage <pages.length){
  setCurrentPage(currentPage + 1)
}

}

/* sent the datat to mongoddb */
useEffect(()=>{

  fetch(`https://productpeek-rust.vercel.app/allProduct?pages=${currentPage}&size=${itemrPerPage}`)
//axiosSecure.get(`/allProduct?page=${currentPage}&size=${itemrPerPage}`)
.then((res)=> res.json())
.then(data=>setAllProducts(data))
},[currentPage,itemrPerPage])

  {
    /* loading */
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-center mx-auto gap-3 lg:justify-start lg:gap-7">
        <div className="">
          {/* seacth inpuy */}
          <input
            class=" bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
            autocomplete="off"
            placeholder="Search product..."
            name="text"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* sort functionality */}
        <div>
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button lg:hidden flex items-center"
          ></label>
          <select
            className="select w-full max-w-xs border border-orange-300"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option disabled value="">
              Sort By
            </option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
            <option value="newest-first">Newest First</option>
          </select>
        </div>

        {/* category */}

        <div>
          <label htmlFor="" className="text-xl font-bold mb-4 block">
            Categories
          </label>

          <select
            id="category"
            className="text-black"
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option value="">All Categories</option>

            {categoryMap?.map((opt) => (
              <option key={Math.random()} value={opt}>
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* min & max price */}

        <form action="" onSubmit={handleFilter}>
          <label>Price Range:</label>
          <input
            className="select max-w-xs border border-orange-300"
            type="number"
            name="minPrice"
            placeholder="Min Price"
            defaultValue="0"
          />
          <input
            className="select  max-w-xs border border-orange-300"
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            defaultValue="0"
          />

          <button type="submit" className="btn  btn-outline">
            Apply
          </button>
        </form>
        <button
          type="submit"
          className="btn  btn-error text-white"
          onClick={hadleReset}
        >
          Reset All
        </button>
      </div>

      {/* all product data */}

      <div className="px-4 py-6 bg-[#FF2279]/15 mt-10">
        <h1 className="font-bold text-4xl my-2"> </h1>
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
          {categoryFilter.length > 0
            ? categoryFilter?.map((product) => (
                <Card key={product._id} data={product} />
              ))
            : allProducts?.map((pd) => <Card key={pd._id} data={pd}></Card>)}
        </div>
      </div>

      {/* padination */}
      <div className="text-center my-6">
      <h1>{currentPage}</h1>
      <button onClick={handlePrev} className="btn btn-success">Prev</button>
        {pages.map((page) => (
          <button onClick={()=>setCurrentPage(page)} className={`${currentPage === page ? "btn btn-error mx-2 text-white": "btn btn-outline mx-3"}`}>{page}</button>
        ))}
<button onClick={handleNext}  className="btn btn-success">Next</button>
        <select value={itemrPerPage} onChange={handlePerPage}>
          <option value="5"> 5</option>
          <option value="10"> 10</option>
          <option value="20"> 20</option>
          <option value="50"> 50</option>
        </select>
      </div>
    </div>
  );
};

export default Product;
