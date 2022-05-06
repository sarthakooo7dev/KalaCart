import { Refresh } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import {useDispatch, connect } from 'react-redux'
import image from '../data/images/1.jpg'
import { ADD_ITEM } from '../redux/Action';

import AddTaskIcon from '@mui/icons-material/AddTask';

const Card = ( { artist , title, price ,img ,id , itemID}) => {

  const[addCartStatus , setAddCartStatus]=useState(false);
 
    const dispatch = useDispatch();
const AddToCart =()=>{
dispatch({ type :ADD_ITEM , payload :{id : id}});





}


// >>>>>>>>>>>>>>>>>>>>>>>>>card status<<<<<<<<<<<<<
  useEffect(() => {

    if ((itemID.includes(id))) {
      setAddCartStatus(true);
    } else {
      setAddCartStatus(false);
    }
     
    console.log(addCartStatus,id ,"real time card status")

   
  });





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<

  return (
    <>
    <div className='card'>
        <div className='c-img'>
            <img src={img} alt="" />
        </div>
              <div className='c-info'>
            <div className='art-artist'>
                      <h2>{title}</h2>
                      <p>{artist}</p>
            </div>

            <div className='price-btn flex'>
                      <p>${price}</p>

      {
        
       
              addCartStatus ?<div><AddTaskIcon style={{ color:"blue" , fontSize:"2.5em" }}/> </div> : <button onClick={AddToCart}>Add to cart</button> 
      }
                    
          {console.log(addCartStatus,"---addcartstatus")}           

            </div>
         
        </div>

    </div>
    
    </>
  )
}

const mapStateToProps =(state)=>{

    return { state , itemID:state.itemID}
}

export default  connect(mapStateToProps) (Card);