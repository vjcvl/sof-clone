import React, { useEffect, useState } from 'react';

import { Link , useNavigate} from "react-router-dom";

import Navbar from './Navbar';
import { useFormik } from "formik";
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
         
            email: "",
            password : ""
        },
        onSubmit: async values => {
               try {
                   let logdata = await axios.post("https://sof-clo.herokuapp.com/login",values)
                   window.localStorage.setItem("my_token",logdata.data.token);
                   
               } catch (error) {
                   console.error(error);
               }
            navigate("/")
        },
      });

  return(
    <div>
      <Navbar/>
      <div className="container">
        
         
          <div className="my-5">
              <center><img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Stackoverflow icon" className="login-img"/></center>
              <form className="login-form box box-shadow white-background black-text" onSubmit = {formik.handleSubmit}>
                  
                  <div className="form-group">
                      <p className="form-label">Email:</p>
                      <input type="email" name="email" className="form-control" value={formik.values.email} onChange = {formik.handleChange} />
                  </div>
                  <div className="form-group">
                      <p className="form-label">Password:</p>
                      <input type="password" name="password" className="form-control" value={formik.values.password} onChange = {formik.handleChange} />
                  </div>
                  <div className="form-group">
                      <p>Don't have an account? <Link to = "/register">Sign up</Link></p>
                      <input type="submit" value="Login" className="form-control btn blue-background white-text"/>
                  </div>
              </form>
          </div>
      </div>
      </div>
  )
}

export default Login
