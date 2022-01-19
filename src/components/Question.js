import React from 'react'

import { useFormik } from "formik";
import Navbar from "./Navbar";
import axios from 'axios';
function Question() {
    
    const formik = useFormik({
        initialValues: {
            name : "",
            email: "",
            password : ""
        },
        onSubmit : async (values) =>{
            try {
              await axios.post("https://sof-clo.herokuapp.com/posts",values);
           
            } catch (error) {
                console.error(error);
            }
              
        
          }
      });
    return (
        <div>
            <Navbar/>
             <div className="col-6 small-screen-signup">
                    <p className="register-title">Post your thoughts</p>
                </div>
                <div className="col-6">
                    <form className="box box-shadow m-3 white-background black-text" onSubmit = {formik.handleSubmit}>
                    
                        <div className="form-group">
                            <p className="form-label">Questions </p>
                            <input type="text" className="form-control" name="quest" value={formik.values.quest} onChange = {formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control btn blue-background white-text"/>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Question
