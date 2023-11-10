import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';


import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';



const New = () => {
  return (
    <div className='Homebody'>
<div className='wallpaper'>
    <nav className="navbar">
      <ul className="nav-list">
       

      
        <li className="nav-item">Cars</li>
     

        <Link to='/' ><li className="nav-item">home </li></Link>
        
      
         <Link to='/Newabout' ><li className="nav-item"> About us</li></Link>

       
         <Link to='/Allcars' ><li className="nav-item"> All Car</li></Link>
   


         <Link to='/Content' ><li className="nav-item"> Contact us</li></Link>
 


       
        <Link to='/login'><li className="nav-item"> login</li></Link>


      </ul>
    </nav>      
</div>

<footer className="footer">
      <div className="contact-info">
        <p>Toll Free Number : 1800 209 8282</p>
        <p>Missed Call Number: 9512127979</p>
        <p>WhatsApp Number: 96430 06652</p>
      </div>
      <div className="terms-and-conditions">
        <a href="/terms">Terms and Conditions</a>  <br></br>
        <a href="/terms">Privecy & policy</a>


      </div>
      <div className="social-iconsss">
        <AiOutlineFacebook/> 
        <AiOutlineInstagram/>
        <AiOutlineYoutube/>
      </div>
    </footer>







    </div>
  )
}
export default New