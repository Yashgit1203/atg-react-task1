import Hero from './Hero'
import AllPosts from './AllPosts'
import Button from './Button'
import "./css/Hero.css";
import { useState } from 'react';

const MainContent = () => {

  const [group,setgroup] = useState(false);
  const onclick =()=> {
      setgroup(!group)
      
  }
  return (
    
    <div>
      <Hero group={group} onclick = {onclick}/>
      <div className='mt-4 post-pad'>
        <div className='row mt-4'>
            <div className='col-lg-12 col-sm-12'>
                <AllPosts/>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default MainContent
