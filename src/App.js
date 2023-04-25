// import logo from './logo.svg';
import About from '../ES6Fresher/components/About';
import './App.css';
import React, { useState } from 'react'
import Navbar from '../ES6Fresher/components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
 const [darkMode, setdarkMode] = useState(false); // Whether dark mode eneabled or not
  return (
   <>
   <Navbar title ="TextUtils" mode ={"darkMode"} />
   <div className="container my-3">

    <TextForm heading = "Enter the text to analysis"/>
    <About></About>
   </div>
   </>
  );
}
export default App;
