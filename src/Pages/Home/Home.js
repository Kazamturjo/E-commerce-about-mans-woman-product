import React from 'react'
import MainContent from '../../component/MainContent/MainContent'
import Product from '../Product/Product'
import NewsLetter from '../NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
        <MainContent/>
        <Product/>
        <NewsLetter/>
    </div>
  )
}

export default Home