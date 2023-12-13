import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductPricing = () => {
  const {current} = useOutletContext()
  return (
    <div><h4>${current.price}/day</h4></div>
  )
}

export default ProductPricing