import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { INCREASE ,DECREASE } from '../redux/Action'
const Cartitem = ({image, price , title , amount ,id }) => {
 
 
  const dispatch = useDispatch();

  const HandleDecrease = () => {
    dispatch({ type: DECREASE, payload: { id: id , amount:amount } });
    alert("kk")
    console.log("inc clicked")
  }


  const HandleIncrease =()=>{
    dispatch({ type: INCREASE, payload: { id: id } });
    alert("kk")
    console.log("inc clicked")
 }








 
  return (
    <>
      <div className='flex' >
          <div className='cart-img'>
          <img src={image} alt="" />
          </div>


      <div className='flex ' style={{ justifyContent:"space-between" , width:"35rem" }}>

  

          <div >
            <p style={{
              fontSize: "1rem",
              color: "rgb(14, 73, 14)",
              margin:"0.2rem 0 0 -0.1rem"
            

            }}>
              {title}
            </p>
            <p style={{
              fontSize:"0.8rem",
              color:"rgb(92, 95, 92)",
              marginTop:"-0.2rem"

            }}  > ${price}</p>
          </div>


        <div className='flex '>
          {/* increase amount */}
            <button className="amount-btn" onClick={HandleIncrease}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          {/* amount */}
          <p className="amount">{amount}</p>
          {/* decrease amount */}
            <button className="amount-btn" onClick={HandleDecrease}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>


        </div>
      </div>
    
    </>
  )
}



const mapStateToProps = (state ) => {

  return { state }
}
export default connect(mapStateToProps) (Cartitem);