import React, { useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import Navbar from '../componenets/Navbar'
import Cartitem from '../componenets/Cartitem'
import { dialogClasses } from '@mui/material'
import { Link } from 'react-router-dom'
import { CLEAR_CART ,GET_TOTAL } from '../redux/Action'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Cart = ({finalcart=[],  total}) => {
    var a = finalcart;
    console.log(finalcart,"--finalcat--cart")
  const dispatch = useDispatch();

const HandleClear =()=>{
dispatch({ type: CLEAR_CART})

}

  useEffect (() => {
    dispatch({ type: GET_TOTAL });


  })




  { 
    if(a.length === 0){
     return (
       <>
         <Navbar />
         <div className='cart-container'>
          <div className='holder'> 
          <p className='ff-serif fs-500 letter-spacing-2' style={{
            paddingLeft:"0.9rem"
          }}>Your Cart is empty !</p>
             <Link to="/mainpage" id="links" style={{
               paddingLeft:"7.8rem", color:"red"
             }}> Home </Link>
          </div>
       </div>
       </>
     )
    }
    
    
    
    
    console.log(a,"--a") }
  
  return (
    <>
    <Navbar/>
    <div className='cart-container '>
        <div className='cart-card'>
      <div style={{
            padding: " 0.8rem 0rem 0.5rem 0.9rem", background:"rgb(240, 248, 240)" , borderBottom:"2px green solid", marginBottom:"0.4rem"
      }}>
            <h2 style={{fontFamily:"serif" }}>My Cart   </h2>
            
      </div>
       
        {
          a.map( val =>{
            
            console.log(val.amount,"---val--inc - amount")
            
         return(
           <div className='cart-area '>
             
               <Cartitem image={val.imgurl} price={val.price} title={val.title} amount={val.amount} id={val.id} />
            
             
           </div>


         )   
            
          })
          
        }
       
        
        
        <div className='total-area' >
       <button onClick={HandleClear}>
            Clear Cart
         </button> 
         <div className='total'>
            <p> Grand Total : ${total}</p>
         </div>
        </div>
     
        </div>


{
  console.log(total,"total after inc--mainpage")
 
}
{
          console.log(finalcart, "---cart page finalcart")
}



      
    </div>
    
    </>
  )
}
const mapStateToProps =(state)=>{

    return{ finalcart: state.finalcart ,total:state.total}
}

export default connect(mapStateToProps) (Cart);