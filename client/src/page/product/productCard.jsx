import React from 'react'

export const ProductCard = () => {
  return (
    <div><div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-orange-300 transition-shadow">
    <div class="w-52 h-40 bg-orange-300 rounded-2xl"></div>
    <div class="">
        <p class="font-extrabold">Brand</p>
        <p class="">Category.</p>
        <p>Price</p>
    </div>
    <button class="bg-orange-700 font-extrabold p-2 px-6 rounded-xl hover:bg-orange-500 transition-colors">Buy Now</button>
  </div></div>
  )
}
