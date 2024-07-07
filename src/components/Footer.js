import React from "react";
import Button from "./Button";
const Footer = () => {
  return (
    <div class="row">
      <div className="col-lg-8 col-md-12 col-sm-12 d-flex foot ">
        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
          <h5 className="fw-bold">Hobbycue</h5>
          <ul class="nav flex-column">
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                About Us
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Our Services
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Work with Us
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                FAQ
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12  mb-3">
          <h5 className="fw-bold">How Do I</h5>
          <ul class="nav flex-column">
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Sign Up
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Add a Listing
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Claim Listing
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Post a Query
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Add a Blog Post
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Other Queries
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12 mb-3">
          <h5 className="fw-bold">Quick Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Listings
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Blog Posts
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Shop / Store
              </a>
            </li>
            <li class="nav-item fw-semibold mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12 mb-3 ">
        <form>
          <h5 className="fw-bold">Social Media</h5>
          <div className="s-media mb-5 mt-3">
            <Button
              icon="fa-brands fa-facebook-f"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-brands fa-twitter"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-brands fa-instagram"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-brands fa-pinterest-p"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-brands fa-google-plus-g"
              color="#e7e6e7"
              icolor="grey"
              btnclass="pt-2"
              // bheight="2.7rem"
              isize="0.9rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-brands fa-youtube"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              btnclass="pt-2"
              // bheight="2.7rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-brands fa-telegram"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              btnclass="pt-2"
              // bheight="2.7rem"
              bor="50%"
              bo="none"
            />
            <Button
              icon="fa-solid fa-envelope"
              color="#e7e6e7"
              icolor="grey"
              isize="1.05rem"
              btnclass="pt-2"
              // bheight="2.7rem"
              bor="50%"
              bo="none"
            />
          </div>
          <label for="newsletter1">
            <h5 className=" fw-bold">Invite Friends</h5>
          </label>
          <div className="d-flex align-items-center mt-2">
            <form
              className="d-flex align-items-center search_bar"
              style={{ border: "2px solid #8064A2" }}
            >
              <input type="text" name="q" id="q" placeholder="Email ID" />
            </form>
            <button type="submit" className="Imp">
              <p style={{ color: "#fff", marginBottom: "0" }}>Invite</p>
            </button>
          </div>
        </form>
      </div>
      <footer class="py-4 my-4" style={{ backgroundColor: "#F7F5F9" }}>
        <p
          class="text-center text-body-secondary fw-bold mt-3"
          style={{ color: "#08090A" }}
        >
          © Purple Cues Private Limited
        </p>
      </footer>
    </div>
  );
};

export default Footer;
