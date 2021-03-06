import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icon from '../assets/icon3.png'
import ava from '../assets/ava-04.png'
import CollectionsIcon from '@mui/icons-material/Collections';
import { connect } from 'react-redux';

const Navbar = ({count , user}) => {
    const [shownav, setShowNav] = useState("false");
   

    const navigate = useNavigate();
    const goToCart =()=>{
        let path = "/cart";
        navigate(path);
    }
    
    return (
        <>
            <div className='navbar flex  '>
        

                <Link to='/mainpage' className='nav-comp flex ' style={{ textDecoration:"none"}}>
                    <div className='nav-icon flex '>
                        <img src={icon} alt="" />
                    </div>
                    <div className=''>
                        <h1 className='nav-heading'>KalaCart</h1>
                    </div>

                </Link>
                <button className={shownav ? "mobile-nav-hamicon" : "mobile-nav-close"} aria-controls="primary-navigation" onClick={() => setShowNav(!shownav)}></button>
              

                <div className={shownav ? "  primary-nav  flex slide-out" : " primary-nav  flex slide-in"}>
                  

                <div className=' flex' style={{ alignItems:"center" ,paddingRight:"2rem"}} >


                    <div className="nav-container" onClick={goToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                        </svg>
                        <div className="amount-container">
                            <p className="total-amount">{count}</p>
                        </div>
                        
                    </div>
                   
                </div>


                <div className='user-prf flex ' style={{ alignItems: "center"  }}>
                    <div className='ava'>
                        <img src={ava} alt="" />
                    </div>
                    <div>
                        <p className='user-name uppercase '>{user}</p>
                    </div>
                </div>
                </div>

            </div>


        </>

    )
}


const mapStateToProps=(state)=>{

    return { count : state.count , user: state.user}
}




export default connect(mapStateToProps) (Navbar);