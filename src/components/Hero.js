import Image from '../assets/Group27.png'
import Form from './Form';
import "./css/Hero.css";
const Hero = ({group,onclick}) => {
    
  return (
    <div className=" hero " style={{backgroundColor:"#F7F5F9"}}>
      <div className="row h-100 ">
      
        <div className="col-lg-8 col-md-12 col-sm-12 p-5 h-100 d-flex flex-column justify-content-center">
          <div className="hero_info pb-5">
            <div className="h_title py-5">
              <h4 className='fw-bold fst-italic fs-1'>Explore your <span style={{color:"#0096C8"}}>hobby</span> or <span style={{color:"#8064A2"}}>passion</span></h4>
            </div>
            <div className="h_main me-5">
              <p className='lh-lg me-5'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. <span className='h_btext'>Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span></p>
            </div>
            <div className="h_footer me-5">
              <p className='lh-lg me-5 h_btext'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
          </div>
          <div className='mt-4 h_img'>
            <img src={Image} alt=".."/>
          </div>
        </div>
        <div className="col-lg-4 h-form col-md-12 col-sm-12 d-flex flex-column justify-content-center h-100" >
         <Form group={group} onclick={onclick} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
