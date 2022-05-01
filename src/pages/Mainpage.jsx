import Card from '../componenets/Card'
import React, { useState } from 'react'
import Navbar from '../componenets/Navbar'
import Data from '../data/data'

const Mainpage = () => {
const[data,setData]=useState(Data);

  return (
   <>
   <Navbar/>
   
   <div className='wrap-mainpage'>
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