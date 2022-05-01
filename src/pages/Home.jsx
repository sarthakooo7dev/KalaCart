import React, { useEffect, useState } from 'react'
import '../index.css';
import icon from '../assets/icon3.png'
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import video from '../assets/bg-video3.mp4';
import gicon from '../assets/g-icon.png';
import { GET_USERNAME } from '../redux/Action';
import { useDispatch, connect } from 'react-redux';

const Home = ( ) => {
const [loginStatus , setLoginStatus]=useState("")
const[username,setUsername]=useState("--")

    const dispatch = useDispatch();

const Signin =()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(  (res) =>{
        console.log(res);
        setLoginStatus(res.user.emailVerified);
        setUsername(res.user.displayName);

     

        console.log(loginStatus,"----status");
    })
    .catch( (error)=>{
        console.log(error)
    })

   




}

// {
//         if (loginStatus === true) {
//             console.log(loginStatus, "---on true condt.")

//             console.log(username,"--name")
//         }
//         else {
//             console.log(loginStatus, "---on else condt.")
//         }
//         console.log(loginStatus, "after onclick")
// }

    const navigate = useNavigate();
useEffect( ()=>{
   
    console.log(loginStatus, "----status_useffect");
  
    if (loginStatus === true) {
        dispatch({
            type: GET_USERNAME, payload: { username: username }
        })
        let path = "/mainpage";
        navigate(path);

    }
  } , [loginStatus])






  return (
    <>
   
          {/* <div className='vd-class bg-area'  >
              <video className='bg-video' autoPlay loop muted playsInline src={video}></video>
          </div> */}



         <div className=' home flex bg-area '>
             <div className='main-comp flex '>
                  <div className='icon flex '>
                      <img src={icon} alt="" />
                  </div>
                  <div className=''>
                      <h1 className='home-heading'>KalaCart</h1>
                  </div>
                  
             </div>
              <div>
                  <p className='heading-quote'>A marketplace for exclusive art.</p>
              </div>
        

                  <div className=' login-main flex '>
                  <div className='login-box' onClick={Signin} >
                      <img src={gicon} alt="" /> 
                          
                          </div>
                          <div className='div-line'></div>
                      
                      <Link to="/mainpage" id='btn'  > Demo login</Link>
                     
                  </div>
         
             
             
          </div>
          
    
    </>
  )
}
const mapStateToProps =(state )=>{
    return { state }
}

export default connect(mapStateToProps) (Home);