import React, { useState } from 'react'
import {useDispatch, connect } from 'react-redux'
import image from '../data/images/1.jpg'
import { ADD_ITEM } from '../redux/Action';
const Card = ( { artist , title, price ,img ,id}) => {

  const[addCartStatus , setAddCartStatus]=useState(false);
  
    const dispatch = useDispatch();
const AddToCart =()=>{
dispatch({ type :ADD_ITEM , payload :{id : id}});
setAddCartStatus(true);
alert(" added item")

}




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
        addCartStatus ? <div> added</div> : <div> not added</div>
      }
                      
                      <button onClick={AddToCart}>Add to cart</button>

            </div>
         
        </div>

    </div>
    
    </>
  )
}

const mapStateToProps =(state)=>{

    return { state}
}

export default  connect(mapStateToProps) (Card);