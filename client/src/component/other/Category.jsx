import React from 'react'

export const Category = () => {
  return (
    <div>    <div>
    <div className=" m-auto md:px-10 px-5 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-2  mt-10">
      <div className="flex items-center justify-between px-6 bg-[#FF9C35] rounded-lg py-4">
        <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">Grocery</h1>
        <img
          src="https://img.freepik.com/free-vector/shopping-basket-full-vegreables-realistic-image_1284-14457.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid"
          className="h-20"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between px-6 bg-[#FF136F] rounded-lg py-4">
        <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">Make UP</h1>
        <img
          src="https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid"
          className="h-20"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between px-6 bg-[#403EFB] rounded-lg py-4">
        <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">Furniture</h1>
        <img
          src="https://img.freepik.com/free-vector/red-sofa-isolated_1284-4976.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid"
          className="h-20"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between px-6 bg-[#3efbd2] rounded-lg py-4">
        <h1 className="lg:text-3xl md:text-2xl text-3xl font-bold text-white uppercase">Electronic</h1>
        <img
          src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white-background_155003-3942.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid"
          className="h-20"
          alt=""
        />
      </div>
    </div>
  </div></div>
  )
}
