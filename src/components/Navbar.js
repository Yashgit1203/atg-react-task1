import React from "react";
import Logo from "../assets/HobbyCueLogo.png";
import "./css/Navbar.css";
import Button from "./Button";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="cont d-flex justify-content-between align-items-center">
    
      <div className="n-logo">
        <Link to="/home">
        <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="n-search">
        <div className="d-flex align-items-center ">
          <form className="d-flex align-items-center  search_bar">
            <input type="text" name="q" id="q" placeholder="Search here ..." />
          </form>
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between r_most">
        <div className="n-search">
          <div
            className=" d-flex align-items-center "
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          >
            <i
              class="fa-solid fa-compass"
              style={{
                color: "#8064A2",
                fontSize: "1.5rem",
                position: "relative",
                left: "0.65rem",
              }}
            ></i>
            <Button
              text="Explore"
              bo="none"
              icolor="#939CA3"
              icon="fa-solid fa-chevron-down"
            />
          </div>
          <ul class="dropdown-menu" style={{position:"absolute",width:"15rem",left:"55rem"}}>
            <li>
              <a class="dropdown-item" href="#">
                People - Community
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Places - Venues
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Programs - Events
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Products - Store
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="n-search">
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i
              class="fa-solid fa-star"
              style={{
                color: "#8064A2",
                fontSize: "1.5rem",
                position: "relative",
                left: "0.65rem",
              }}
            ></i>
            <Button
              text="Hobbies"
              bo="none"
              icolor="#939CA3"
              icon="fa-solid fa-chevron-down"
            />
          </div>
        </div>
        <div className="n-search">
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <i
            class="fa-solid fa-bookmark"
            style={{ color: "#8064A2", fontSize: "1.5rem" }}
          ></i>
        </div>
        </div>
        <div
          className="d-flex b-ss align-items-center"
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-magnifying-glass gg" style={{ color: "#8064A2", fontSize: "1.5rem" }}></i>
          <i
            class="fa-solid fa-bell"
            style={{ color: "#8064A2", fontSize: "1.5rem" }}
          ></i>
        </div>
        
        <div className="n-search">
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <i
            class="fa-solid fa-cart-shopping"
            style={{ color: "#8064A2", fontSize: "1.5rem" }}
          ></i>
        </div>
        </div>
        <div className="n-search">
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          
          <Button text="Sign In" tcolor="#8064A2" bo="2px solid #8064A2" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
