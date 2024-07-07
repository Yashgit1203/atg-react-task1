import Button from "./Button";
import search from "../assets/search.png";

import f_logo from "../assets/f_logo.png";
import { useState } from "react";

const Form = ({ group, onclick, colsize }) => {
  const [eye, seteye] = useState(false);
  function onclickeye() {
    seteye(!eye);
  }
  return (
    <div className="conatiner ">
      <div className="row">
        {group ? (
          <div className="sign-login mb-4">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a
                  class="nav-link  fs-4 fw-bold"
                  onClick={() => onclick()}
                  style={{ color: "#939CA3" }}
                  aria-current="page"
                  href="#"
                >
                  Sign In
                </a>
              </li>
              <li class="nav-item ms-4">
                <a
                  class="nav-link active fs-4 fw-bold"
                  style={{ color: "#8064A2 " }}
                  href="#"
                >
                  Join In
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="sign-login mb-4">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a
                  class="nav-link active fs-4"
                  style={{ color: "#8064A2 " }}
                  aria-current="page"
                  href="#"
                >
                  Sign In
                </a>
              </li>
              <li class="nav-item ms-4">
                <a
                  class="nav-link fs-4 fw-bold"
                  onClick={() => onclick()}
                  style={{ color: "#939CA3" }}
                  href="#"
                >
                  Join In
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="o_login">
          <div className="desk">
          <div
            className=" btn mb-4 signUp col-12 d-flex align-items-center justify-content-center"
            style={{ border: "1px solid #8064A2", borderRadius: "0.47rem" }}
          >
            <img src={f_logo} alt="fb_logo" id="fb" />
            <Button
              text="Continue with Facebook"
              btnclass="fw-bold"
              bo="none"
            />
          </div>
          <div
            className=" mb-4 btn signUp col-12  d-flex align-items-center justify-content-center"
            style={{ border: "1px solid #8064A2", borderRadius: "0.47rem" }}
          >
            <img src={search} alt="search_logo" id="go" />
            <Button text="Continue with Google" btnclass="fw-bold" bo="none" />
          </div>
          <div>
            <div
              className="w-100 d-flex justify-content-center "
              style={{ height: "0.2rem" }}
            >
              <div
                className="col-4 "
                style={{ backgroundColor: "#CED4DA" }}
              ></div>
              <p
                className="col-3 fs-6 fw-semibold connect"
                style={{
                  textAlign: "center",
                  margin: "0",
                  position: "relative",
                  bottom: "0.7rem",
                }}
              >
                Or connect with
              </p>
              <div
                className="col-4 "
                style={{ backgroundColor: "#CED4DA" }}
              ></div>
            </div>
          </div>
          </div>
        </div>
        <form className={`${colsize} p-4`}>
          <div class="col-lg-12 mb-4">
            <input
              type="email"
              class="form-control  custom-input"
              placeholder="Email"
            />
          </div>
          <div class="col-lg-12 mb-4 d-flex " style={{ position: "relative" }}>
            <input
              type="password"
              class="form-control custom-input"
              placeholder="Password"
              id="inputPassword4"
            />
            {eye ? (
              <div
                style={{ position: "absolute", right: "1rem", top: "0.40rem" }}
              >
                <i
                  class="fa-solid fa-eye"
                  onClick={() => onclickeye()}
                  style={{ cursor: "pointer", color: "#939CA3" }}
                ></i>{" "}
                <p
                  style={{
                    color: "#939CA3",
                    position: "absolute",
                    top: "2rem",
                    width: "9rem",
                    right: "0rem",
                  }}
                >
                  Password strength
                </p>
              </div>
            ) : (
              <i
                class="fa-solid fa-eye-slash"
                onClick={() => onclickeye()}
                style={{
                  cursor: "pointer",
                  color: "#939CA3",
                  position: "absolute",
                  right: "1rem",
                  top: "0.67rem",
                }}
              ></i>
            )}
          </div>

          {group ? (
            <div className="d-flex justify-content-center">
              <span style={{ color: "#6D747A" }}>
                By continuing, you agree to our{" "}
                <span style={{ color: "black" }}>Terms of Service</span> and{" "}
                <span style={{ color: "black" }}>Privacy Policy</span>.
              </span>
            </div>
          ) : (
            <div className="d-flex my-4 align-items-center justify-content-between">
              <form className="d-flex w-50 justify-content-start align-items-center">
                <input type="checkbox" className="w-25" id="rember" />
                <label for="rember">Remember Me</label>
              </form>
              <div className="d-flex mt-3 align-items-center">
                <i class="fa-solid fa-lock me-2" style={{ color: "black" }}></i>
                <p style={{ margin: "0" }}>Forgot Password</p>
              </div>
            </div>
          )}

          <div class="col-12 my-3 d-flex justify-content-between cc-re">
            {group ? (
              <Button
                text="Agree and Continue"
                bor="0.47rem"
                color="#8064A2"
                tcolor="#fff"
                btnclass="w-100  fw-bold "
              />
            ) : (
              <Button
                text="Continue"
                bor="0.47rem"
                btnclass="w-100 btn-outline-dark fw-bold "
              />
            )}
          </div>
        </form>
        <div className="mobile">
          <div className="mb-4">
            <div
              className="w-100 d-flex justify-content-center "
              style={{ height: "0.2rem" }}
            >
              <div
                className="col-4 "
                style={{ backgroundColor: "#CED4DA" }}
              ></div>
              <p
                className="col-3 fs-6 fw-semibold connect"
                style={{
                  textAlign: "center",
                  margin: "0",
                  position: "relative",
                  bottom: "0.7rem",
                }}
              >
                Or connect with
              </p>
              <div
                className="col-4 "
                style={{ backgroundColor: "#CED4DA" }}
              ></div>
            </div>
          </div>
        <div
            className=" btn mb-4 signUp col-12 d-flex align-items-center justify-content-center"
            style={{ border: "1px solid #8064A2", borderRadius: "0.47rem" }}
          >
            <img src={f_logo} alt="fb_logo" id="fb" />
            <Button
              text="Continue with Facebook"
              btnclass="fw-bold"
              bo="none"
            />
          </div>
          <div
            className=" mb-4 btn signUp col-12  d-flex align-items-center justify-content-center"
            style={{ border: "1px solid #8064A2", borderRadius: "0.47rem" }}
          >
            <img src={search} alt="search_logo" id="go" />
            <Button text="Continue with Google" btnclass="fw-bold" bo="none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
