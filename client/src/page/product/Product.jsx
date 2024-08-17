import React from 'react'
import { UseTitle } from '../../hook/UseTitle'

const Product = () => {


  return (
    <div >

<div className='flex gap-7'>
{/* category */}
<div
  className="relative group rounded-lg w-64 bg-neutral-700 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]"
>
  <svg
    y="0"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    width="100"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    height="100"
    className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
  >
    <path
      stroke-width="4"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
      d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
      className="svg-stroke-primary"
    ></path>
  </svg>
  <select
  name='category'
    className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
  >
    <option className="bg-neutral-700">HTML</option>
    <option className="bg-neutral-700">React</option>
    <option className="bg-neutral-700">Vue</option>
    <option className="bg-neutral-700">Angular</option>
    <option className="bg-neutral-700">Svelte</option>
  </select>
</div>
{/* serach  input */}
<div>
<div class="relative">
  <input
    placeholder="Search..."
    class="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
    name="product"
    type="search"
  />
  <svg
    class="size-6 absolute top-3 right-3 text-gray-500"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</div>

</div>

</div>








  



    </div>
  )
}

export default Product