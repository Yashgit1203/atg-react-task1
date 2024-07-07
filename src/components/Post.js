import React from "react";
import './css/Post.css';
import Button from "./Button";

const Post = ({post, pclass,photo, col,bgcolor,bo,val}) => {
  return (
    <div class={`card ${col} me-4 py-4  mt-2  mb-4 ${pclass} card-${val}`}  style={{cursor:"pointer",backgroundColor:bgcolor,border:bo}}>
      <div class="card-body mx-4  container">
        <div className="d-flex align-items-center post-ph mb-4">
        {photo && <img src={post.photo ? post.photo : photo} alt="..." class="rounded-circle me-2" width="50" height
          ="50" />}
          <span class={`material-symbols-outlined pe-2`} style={{fontSize:"2rem",color:post.color}}>{post.iname}</span>
          <h5 className="card-text fs-3  c-type">{post.type}</h5>
        </div>
        {post.description && <p class="post-desc pe-5 fs-5 fw-normal card-text">
          {post.description}
        </p>}
      
      </div>
      {post.btn_text && <div className="c-footer c-footer-btn mx-4 mb-4">
          <Button text={post.btn_text} tcolor='#8064A2' bo='2px solid #8064A2'/>
        </div>}
      {post.music && <div className="d-flex mt-4 justify-content-between c-footer c-footer-dance mx-4 mb-4">
        <img src={post.music} alt="..." class=" first me-4" />
        <img src={post.music_profile} alt="..." class=" second me-4" />
        </div>}

    </div>
  );
};

export default Post;
