import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar';
function Home() {
    

    return(
        <div>
            <Navbar/>
        <div className="container">
            
            <div className="mt-5 intro-pg pt-5">
                <h1 className="intro-title">We &lt;3 people who code</h1>
                <p className="mt-3 intro-text">We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</p>
              
            </div>
           
        </div>
        </div>
    )
}


export default Home
