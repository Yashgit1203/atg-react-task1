import Post from "./Post";
import Test from "../assets/quotetest.png"
import { useState } from "react";
const Add = () => {
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
    <div className="d-flex ps-4 mt-5 w-100 align-items-center flex-column">
      <div className="d-flex align-items-center mb-5 ">
      <span class={`material-symbols-outlined pe-2`} style={{fontSize:"2rem",color:"#0096C8"}}>add_circle</span>
      <h2 className="ps-3" style={{margin:0}}>Add your own</h2>
      </div>
      <div className="d-flex flex-wrap mb-3 justify-content-center">
        {posts.map((post, index) => (
          <Post key={index} post={post} val={index} col="p_border col-lg-5 col-md-12 col-sm-12" />
        ))}
      </div>
    </div>
  )
}

export default Add
