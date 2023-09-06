import React from 'react'
import { useNavigate } from 'react-router-dom';
import errorpage from './images/errorpage.jpg';
import {AiOutlineArrowLeft} from 'react-icons/ai'
const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div style={{minHeight:"100vh",margin:"0",paddingTop:"4rem"}}>
        <img src={errorpage} alt='errorpage'/><br/>
        <button onClick={()=>navigate(-1)} style={{backgroundColor:"#E48586",borderRadius:"5px",border:"none",outline:"none",color:"white",padding:"10px 20px",fontSize:"20px"}}><AiOutlineArrowLeft/> Go Back</button>
    </div>
  )
}

export default PageNotFound