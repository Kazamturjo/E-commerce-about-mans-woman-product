import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductDetails = () => {
  const {current}=useOutletContext()
  return (
    <div>
      <h4>Name: {current.title}</h4>
            <h4>Category: {current.category}</h4>
            <h4>Description: {current.description}</h4>
            <h4>Visibility: <span>public</span></h4>
    </div>
  )
}

export default ProductDetails