import React, { useEffect, useState } from 'react'
import { UseTitle } from '../../hook/UseTitle'
import useAxiosPublic from './../../hook/AxiosInstance';
import Card from '../../component/Card';

const Product = () => {
const [allProducts,setAllProducts]=useState(null)
const [search,setSearch]=useState('')
const axiosSecure=useAxiosPublic()


{/* fetch all product data */}
useEffect(()=>{
axiosSecure.get('/allProduct')
.then((res)=>setAllProducts(res.data) )
.catch(err=> console.log(err))



})

/* search funtioality */
const serachFilter=allProducts?.filter((product)=> product?.productName.toLowerCase().includes(search.toLowerCase()))

  return (
    <div >

    <input
    class=" bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
    autocomplete="off"
    placeholder="Search query..."
    name="text"
    type="text"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}

  />


    <div className='px-4 py-6 bg-[#FF2279]/15 mt-10'>
    <h1 className="font-bold text-4xl my-2"> </h1>
    <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 ">
      {serachFilter?.map((product) => (
        <Card key={product._id} data={product} />
      ))}
    </div>
  </div>






  



    </div>
  )
}

export default Product