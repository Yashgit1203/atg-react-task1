import React, { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Add from "./components/Add";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [group, setGroup] = useState(false);
  const onClick = () => {
    setGroup(!group);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid header-nav d-flex justify-content-between">
            <Navbar />
            <button
              className="navbar-toggler btn-re"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="collapse-re">
                <div className="col-lg-4 h-form col-md-12 col-sm-12 d-flex flex-column justify-content-center h-100">
                  <Form group={group} onClick={onClick} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
