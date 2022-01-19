import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Question from './components/Question';
import Register from './components/Register';


function App() {
    return (
        <div>
            <BrowserRouter>
               <Routes>
                <Route path = "/login" element={<Login/>}/>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/register" element={<Register/>}/>
                <Route path = "/question" element={<Question/>}/>
                </Routes> 
            </BrowserRouter>
        </div>
    );
}

export default App;
