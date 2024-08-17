import React, { useEffect, useState } from "react";
import { UseTitle } from "../../hook/UseTitle";
import useAxiosPublic from "./../../hook/AxiosInstance";
import Card from "../../component/Card";
import { useLoaderData } from "react-router-dom";
import { Loading } from "../../component/shared/Loading";

const Product = () => {
  const axiosSecure = useAxiosPublic();
  const [loading,setLoading]=useState(true)
  const [pagiData, setPagiData] = useState([]);
  const {count}=useLoaderData()

  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState('');
const [category,setCategory]=useState('')
  {
    /* fetch all product data */
  }

  useEffect(() => {
    setLoading(true)
    axiosSecure
      .get("/allProduct")
      .then((res) => {setAllProducts(res.data)

        setLoading(false)
      })
      .catch((err) => console.log(err));
  },[]);

  /* pagination */
{/* sort funciton ality */}
const [sort,setSort]=useState('')
const sortProducts=[...allProducts].sort((a,b)=>{

if(sort ==='low-to-high'){
  return a.price -b.price
}else if(sort === 'high-to-low' ){
  return b.price - a.price
}else if(sort === 'newest-first'){
  return new Date(b.productCreationDate) - new Date(a.productCreationDate)
}

return 0
})

  /* search funtioality */
  const serachFilter = sortProducts?.filter((product) =>
    product?.productName.toLowerCase().includes(search.toLowerCase())
  
  );  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
    {/* seacth inpuy */}
      <input
        class=" bg-zinc-200 text-orange-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
        autocomplete="off"
        placeholder="Search query..."
        name="text"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
{/* sort functionality */}
<label
htmlFor="my-drawer-2"
className="btn drawer-button lg:hidden flex items-center"
>

</label>
<select
className="select w-full max-w-xs border border-orange-300"
value={sort}
onChange={(e)=>setSort(e.target.value)}
>
<option disabled value="">
  Sort By
</option>
<option value="low-to-high">Low to High</option>
<option value="high-to-low">High to Low</option>
<option value="newest-first">Newest First</option>
</select>
      {/* all product data */}

      <div className="px-4 py-6 bg-[#FF2279]/15 mt-10">
        <h1 className="font-bold text-4xl my-2"> </h1>
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
          {serachFilter?.map((product) => (
            <Card key={product._id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
