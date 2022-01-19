import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import { useFormik } from 'formik';
import axios from 'axios';


function Navbar() {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit : async (values) =>{
            try {
              await axios.post("https://sof-clo.herokuapp.com/answers",values);
           
            } catch (error) {
                console.error(error);
            }
              
        
          }
  });
    return (
        <>
       
        <nav class="navbar sticky-top navbar-expand-lg">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto h4">
      <li class="nav-item ">
        <Link class="nav-link" to ="/home">Stackoverflow<span class="sr-only"></span></Link>
      </li>
      <li class="nav-item">
      <span className="topnav-hamburger-menu" data-target = "myTopnav">&#x2630;</span>
      </li>
      <li>
        
        <form onSubmit={formik.handleSubmit}>
          <input className='form-control' placeholder = "search..." name='search' type="text" onChange={formik.handleChange}/>
          
        </form>
        
      </li>
      <li class="nav-item">
      <Link to="/question"><span className="topnav-hamburger-menu" data-target = "myTopnav">Questions</span></Link>
      </li>
     <li>
      <div className="navbar-right" id="myTopnav">
         
          
            <Link className="topnav-right " to="/login"><button className='btn btn-secondary btn-sm'>Login</button></Link>
            <Link className="topnav-right " to="/register"><button className='btn btn-primary btn-sm'>Sign up</button></Link>
           
            
            </div>
      </li>
    </ul>

  </div>
</nav>
        </>
    )
}

export default Navbar
