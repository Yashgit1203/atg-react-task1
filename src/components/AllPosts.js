import Post from "./Post";
import { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import Quote from "../assets/quotetest.png";
import Dancer from "../assets/dancer.png";
import Audio from "../assets/AudioTrack.png";
import Top from "../assets/gotop.png";
import DImg from "../assets/endphoto.png";
import {Link} from "react-router-dom";
import "./css/AllPosts.css";

const AllPosts = () => {
 
  const [posts, setpost] = useState([
    {
      type: " People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
      btn_text: "Connect",
      iname: "groups",
      
    },
    {
      type: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
      btn_text: "Meet up",
      iname: "location_on",
  
    },
    {
      type: " Product",
      description:
        "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
      btn_text: "Get it",
      iname: "shopping_basket",
     
    },
    {
      type: " Meetup",
      description:
        "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
      btn_text: "Attend",
      iname: "event_available",
      
    },
  ]);
  return (
    <div className=" mt-5 ">
      <div className="d-flex flex-wrap mb-3 justify-content-center">
        {posts.map((post, index) => (
          <Post key={index} post={post} val={index} col="col-lg-5 col-md-12 col-sm-12" />
        ))}
      </div>

      <div className="m_sec">
      <Link to="/add" style={{textDecoration:"none"}}>
      <Post
        post={{
          type: " Add your own",
          description:
            "Are you a teacher or expert? Do you sell or rent out equipment,venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page",
          btn_text: "Add new",
          iname: "add_circle",
          color:"#0096C8"
        }}
        val="4"
        col="col-12"
      />
      </Link>
      </div>

     <div className="m_sec">
     <Post
        post={{
          type: " Testimonials",
          description:
            "In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.",
          music: Audio,
          music_profile: Dancer,
          
        }}
        photo={Quote}
        bgcolor="#F7F5F9"
        bo="none"
        val="5"
        col="col-12"
      />
     </div>

      <div className="mb-5 mt-5">
            <div className=" pt-4 pb-4">
            <h4 className="fw-semibold fst-italic fs-1 font-re">
                Your <span style={{ color: " #8064A2" }}>Hobby</span> , Your{" "}
                <span style={{ color: "#0096C8" }}>Community...</span>
            </h4>
            </div>
            <div className="d-flex mb-5 align-items-center justify-content-between">
            <div>
                <Button
                text="Get started"
                tcolor="#fff"
                color="#8064A2"
                bor="0.5rem"
                />
            </div>
            <img
                src={Top}
                alt="..."
                class=" me-4"
                style={{ cursor: "pointer" }}
            />
            </div>
            <div className="l_image mt-5 pt-5 ">
            <img
                src={DImg}
                alt="..."
                className=" me-4 w-100 mb-5"
                
                style={{ cursor: "pointer" }}
            />
            </div>
      </div>
      <div className="mt-5">
        <Footer/>
      </div>
    </div>
  );
};

export default AllPosts;
