import React from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Add from "./components/Add";
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  const [group,setgroup] = useState(false);
  const onclick =()=> {
      setgroup(!group)
      
  }
  return (
    <Router>
    
    <div className="App ">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid header-nav d-flex justify-content-between">
        <Navbar />
        <button class="navbar-toggler btn-re"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon " ></span>
    </button>
    <div class="collapse  navbar-collapse" id="navbarNavDropdown">
      <div className="collapse-re">
      <div className="col-lg-4 h-form col-md-12 col-sm-12 d-flex flex-column justify-content-center h-100" >
         <Form group={group} onclick={onclick} />
        </div>
      </div>
    </div>
      </div>
      </nav>
    </div>
    <Routes>
    <Route path="/add" element={<Add/>}/>
    <Route path="/home" element={<MainContent />}/>
    </Routes>
    </Router>
  );
};

export default App;
