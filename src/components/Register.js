
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "./Navbar";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name : "",
            email: "",
            password : ""
        },
        onSubmit : async (values) =>{
            try {
               await axios.post("https://sof-clo.herokuapp.com/register",values);

            } catch (error) {
                console.error(error);
            }
              
            navigate("/login");
          }
      });
   
    return(
        <div>
            <Navbar/>
        <div className="container">
           
            <div className="row my-3">
                <div className="col-6 width-screen-signup pt-5">
                    <h1 className="pt-5">Join the Stack Overflow Community</h1>
                    <ul>
                        <li>Get unstuck — ask a question</li>
                        <li>Unlock new privileges like voting and commenting</li>
                        <li>Save your favorite tags, filters, and jobs</li>
                        <li>Earn reputation and badges</li>
                    </ul>
                </div>
                <div className="col-6 small-screen-signup">
                    <p className="register-title">Create your Stack Overflow account. It's free and only takes a minute.</p>
                </div>
                <div className="col-6">
                    <form className="box box-shadow m-3 white-background black-text" onSubmit = {formik.handleSubmit}>
                    
                        <div className="form-group">
                            <p className="form-label">Display name:</p>
                            <input type="text" className="form-control" name="name" value={formik.values.name} onChange = {formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <p className="form-label">Email:</p>
                            <input type="email" className="form-control" name = "email" value={formik.values.email} onChange = {formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <p className="form-label">Password:</p>
                            <input type="password" className="form-control" value={formik.values.password} name = "password" onChange = {formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <p>Already have an account? <Link to= "/login">Log in</Link></p>
                            <input type="submit" className="form-control btn blue-background white-text"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register
