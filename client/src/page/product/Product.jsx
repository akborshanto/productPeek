import React, { useEffect, useState } from "react";
import { UseTitle } from "../../hook/UseTitle";
import useAxiosPublic from "./../../hook/AxiosInstance";
import Card from "../../component/Card";
import { useLoaderData } from "react-router-dom";
import { Loading } from "../../component/shared/Loading";
import Sidebar from "../../component/shared/Sidebar";

const Product = () => {
  const axiosSecure = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [pagiData, setPagiData] = useState([]);

  const [allProducts, setAllProducts] = useState([]);
console.log(allProducts)
console.log(pagiData)
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
  const serachFilter = allProducts?.filter((product) =>
    product?.productName.toLowerCase().includes(search.toLowerCase())
  );
  {
    /* category  */
  }
  const [selectCategory, setSelectCategory] = useState("");
  const categoryFilter = serachFilter?.filter(
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

    const PriceFilterRange = allProducts?.filter((priceRange) => {
      setLoading(true)
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

  fetch(`https://productpeek-rust.vercel.app/prduct_pagination?pages=${currentPage}&size=${itemrPerPage}`)
//axiosSecure.get(`/allProduct?page=${currentPage}&size=${itemrPerPage}`)
.then((res)=> res.json())
.then(data=>setAllProducts(data))
},[currentPage,itemrPerPage])

{/* sidebar */}

const[visibleSidebar,setVisbaleSidebar]=useState(false)

const toggleSidebar=()=>{

setVisbaleSidebar(!visibleSidebar)

}
{/*  */}





  {
    /* loading */
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (

   
<div className="">
<div className="text-center mx-2 flex justify-between">
<button className="btn btn-outline  text-red-400 border-[#fb5200] lg:hidden " onClick={toggleSidebar}>{visibleSidebar ? "Close " : " Fiter"}</button>

<input
class=" bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
autocomplete="off"
placeholder="Search product..."
name="text"
type="text"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
{/*didebar  */}

</div>



<div  className="flex ">

{/* sidbar */}

<div>
{
  visibleSidebar  &&
  <div className={` h-full w-full z-10  animation animate-pulse transition-transform   `}>


  <aside className=" rounded-lg mt-10   h-screen  flex flex-col w-64 h-screen-full px-4 py-2   text-black  bg-[#ffdeeb] ">
  
  
  
  <div className="flex flex-col justify-between flex-1 mt-8">
    <nav className="flex-1 -mx-3 space-y-2">
  
    <div href="" className="items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-300">

    </div>
  
  {/* category */}
      <a
        className=" items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-300 "
        href="#"
      >
         {/* category */}
  
    <div>
    <h1 className="text-black font-bold text-2xl text-start my-2">Category</h1>
  
    <select
      id="category"
        className="select select-bordered w-full max-w-xs text-black"
  
      value={selectCategory}
      onChange={(e) => setSelectCategory(e.target.value)}
    >
  
      <option value=""  disabled> Categories</option>

  
      {categoryMap?.map((opt) => (
        <option key={Math.random()} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  </div>
      </a>
  
      <a
        className=" items-center px-3 py-2 text-black-600 transition-colors duration-300 transform rounded-lg"
        href="#"
      >
      {/* sort functionality */}
    <div>
  <h1 className="font-bold text-2xl my-2 text-black">Sorting </h1>
      <select
        className="select select-bordered w-full max-w-xs text-black"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option disabled value="" className="w-full">
          Sort By
        </option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
        <option value="newest-first">Newest First</option>
      </select>
    </div>
  
  
      
      </a>
    <a
        className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg "
        href="#"
      >
      
  
    {/* min & max price */}
  
    <div className="">
  
    <form action="" onSubmit={handleFilter} className="">
  <h1 className="font-bold text-2xl">Price Range </h1>
    <input
      className="select  border border-orange-300 my-2 text-black"
      type="number"
      name="minPrice"
      placeholder="Min Price"
      defaultValue="0"
    />
    <br />
    <input
      className="select  border border-orange-300 text-black"
      type="number"
      name="maxPrice"
      placeholder="Max Price"
      defaultValue="0"
    />
  
    <button type="submit" className="btn  btn-success text-white mt-2 w-full">
      Apply
    </button>
  </form>
  
    {/* resets */}
    <div>
    <button
    type="submit"
    className="btn  btn-error text-white w-full my-2"
    onClick={hadleReset}
  >
    Reset
  </button>
    </div>
  
  
    </div>
  
  
      </a>
  
    </nav>
  
  </div>
  </aside> 
  
  
  </div> 
}



</div >
 <div className=" h-full  hidden  md:hidden  lg:block  ">


  <aside className=" rounded-lg mt-10   h-screen  flex flex-col w-64 h-screen-full px-6 py-2 overflow-y-auto  text-black border-r rtl:border-r-0 rtl:border-l bg-[#ffdeeb] dark:border-gray-700">
  
  
  
  <div className="flex flex-col justify-between flex-1 mt-8">
    <nav className="flex-1 -mx-3 space-y-2">
  
    <div href="" className="items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-300">

    </div>
  
  {/* category */}
      <a
        className=" items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-300 "
        href="#"
      >
         {/* category */}
  
    <div>
    <h1 className="text-black font-bold text-2xl text-start my-2">Category</h1>
  
    <select
      id="category"
        className="select select-bordered w-full max-w-xs text-black"
  
      value={selectCategory}
      onChange={(e) => setSelectCategory(e.target.value)}
    >
  
      <option value=""  disabled> Categories</option>
      <option value="">All Categories</option>
  
      {categoryMap?.map((opt) => (
        <option key={Math.random()} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  </div>
      </a>
  
      <a
        className=" items-center px-3 py-2 text-black-600 transition-colors duration-300 transform rounded-lg"
        href="#"
      >
      {/* sort functionality */}
    <div>
  <h1 className="font-bold text-2xl my-2 text-black">Sorting </h1>
      <select
        className="select select-bordered w-full max-w-xs text-black"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option disabled value="" className="w-full">
          Sort By
        </option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
        <option value="newest-first">Newest First</option>
      </select>
    </div>
  
  
      
      </a>
    <a
        className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg "
        href="#"
      >
      
  
    {/* min & max price */}
  
    <div className="">
  
    <form action="" onSubmit={handleFilter} className="">
  <h1 className="font-bold text-2xl">Price Range </h1>
    <input
      className="select  border border-orange-300 my-2 text-black"
      type="number"
      name="minPrice"
      placeholder="Min Price"
      defaultValue="0"
    />
    <br />
    <input
      className="select  border border-orange-300 text-black"
      type="number"
      name="maxPrice"
      placeholder="Max Price"
      defaultValue="0"
    />
  
    <button type="submit" className="btn  btn-success text-white mt-2 w-full">
      Apply
    </button>
  </form>
  
    {/* resets */}
    <div>
    <button
    type="submit"
    className="btn  btn-error text-white w-full my-2"
    onClick={hadleReset}
  >
    Reset
  </button>
    </div>
  
  
    </div>
  
  
      </a>
  
    </nav>
  
  </div>
  </aside> 
  
  
  </div> 

{/* all content */}
<div>


{/* all product data */}

<div className="px-4 py-6 bg-[#FF2279]/15 mt-10">
  <h1 className="font-bold text-4xl my-2"> </h1>
  <div className={` ${visibleSidebar ?  "hidden animate-ping" :" grid lg:grid-cols-3 gap-4 grid-cols-1"} `}>
    {categoryFilter?.length > 0
      ? categoryFilter?.map((product) => (
          <Card key={product._id} data={product} />
        ))
      : allProducts?.map((pd) => <Card key={pd._id} data={pd}></Card>)}
  </div>
</div>

{/* padination */}
<div className={`${visibleSidebar ?  "hidden" :"text-center my-6 "}`}>

<button onClick={handlePrev} className="btn  bg-[#fb5200] text-white">Prev</button>
  {pages?.map((page) => (
    <button onClick={()=>setCurrentPage(page)} className={`${currentPage === page ? "btn btn-error mx-0 lg:mx-2 text-white": "btn btn-outline mx-0 lg:mx-3"}`}>{page}</button>
  ))}
<button onClick={handleNext}  className="btn  bg-[#fb5200] text-white">Next</button>
  <select value={itemrPerPage} onChange={handlePerPage}>
    <option value="5"> 5</option>
    <option value="10"> 10</option>
    <option value="20"> 20</option>
    <option value="50"> 50</option>
  </select>
</div>
</div>

 
</div>

</div>

  );
};

export default Product;
