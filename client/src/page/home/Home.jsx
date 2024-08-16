import React from 'react'
import { Category } from '../../component/other/Category'
import Banner from '../../component/other/Banner'
import { ProductDisplay } from '../../component/other/ProductDisplay'

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Category></Category>
    <ProductDisplay></ProductDisplay>
    </div>
  )
}

export default Home