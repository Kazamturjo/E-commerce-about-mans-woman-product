import React from 'react'
import { Link, useParams,NavLink,Outlet } from 'react-router-dom'
import './ProductID.css'
import axios from 'axios'

const ProductID = () => {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#161616",
        
    }
    const {id}=useParams()
    const [current,setCurrent]=React.useState(null)

   React.useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>{
        setCurrent(res.data)
    })
    .catch(err => {
        console.error('Error fetching data', err);
      });
   })
    
    return (
        <>
        <Link 
        to="/products"
        relative='path'
        className='back-button'>
            &larr;<span>Back to all products</span>
        </Link>
       {current ? (

        <div className="ID-container">
            <div className="">
                <img src={current.image} style={{width:'300px', margin:'20px'}}/>
                <div className="host-van-detail-info-text" >
                        <i
                            // className={`van-type van-type-${current.description}`}
                        >
                            {current.category}
                        </i>
                        {/* <h3>{current.title}</h3> */}
                        {/* <p>{current.description}</p>
                        <h4>${current.price}/day</h4> */}
                    </div>
               
                    </div>
                <nav className="detail-nav">
                <NavLink
                        to="."
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Pricing
                    </NavLink>
                    
                    
                </nav>


                
           
            <Outlet context={{ current }} />
        </div>
       ) : <h1>Loading....</h1>} 

    </>
      )
    }
    

export default ProductID