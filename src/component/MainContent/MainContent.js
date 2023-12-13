import React from 'react'
import './Main.css'
import Navbar from '../Header/Navbar';
import "./Main.css"
import HeroSlider from '../HeroSlider/HeroSlider';
const sliderData = [
    {
        "src":"https://media.istockphoto.com/id/1357881528/photo/cropped-shot-of-an-unrecognisable-businessman-sitting-alone-and-using-his-cellphone-in-his.jpg?s=612x612&w=0&k=20&c=CxNdhH_jozb7_oUa2pnKeHwDzVqWZi_qHbUFOo21W0I=",
        "title":"Primark LED Bulb  (Tunable White)",
        "desc":"A seamless introduction to smart lighting experience."
    },
    {
        "src":"https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?b=1&s=170667a&w=0&k=20&c=SVG3LQPHz2JJbsfUil8N9BRxzI9-5S7AR0A1Kha7nng=" ,
        "alt":"Image 2 for slider"
    },
    {
        "src":"https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D" ,
        "alt":"Image 3 for slider"
    }
  ]

const MainContent = () => {
    return( 
         <div className='site-wrapper'>
        <HeroSlider slider={sliderData}/>
 
   </div>
   
   )
  
  

};

export default MainContent