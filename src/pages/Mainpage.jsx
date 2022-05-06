import Card from '../componenets/Card'
import React, { useState } from 'react'
import Navbar from '../componenets/Navbar'
import Data from '../data/data'
import banner from '../assets/bannerf.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Mainpage = () => {
const[data,setData]=useState(Data);

  return (
   <>
   <Navbar/>
   
   <div className='wrap-mainpage'>

<div className='banner-image'>
  <img src={banner} alt="" />
        
</div>

    <div className='header'>
      <h1>Art Gallery</h1>
          <p className='p1'>Buy Curated Fine Acrylic, Oil Painting, Watercolor & Mixed Media Artwork.</p>
         <div className='flex' style={{ flexDirection:"column" , alignItems:"center" ,gap:"0em" ,paddingTop:"2rem"}}>
            <p className='p2'>
              Give Life To Your Walls
              Paintings on Canvas or Paper | Licensed Art Prints | Fully Customizable

            </p>
            <p className='p3'>
              Collection of 3.5+ Lakh Artworks | Free Shipping & Returns
            </p>
           
           
           </div> 
          
    </div>




  <div className='art-grid '>

 
     {
       data.map( (art)=>{

        return(
          <div>
            <Card title={art.title} artist={art.artist} price={art.price} img={art.imgurl} id={art.id} />
            </div>
         
        )
       })

     }

        </div>




    
   </div>
   
   </>
  )
}

export default Mainpage