import React from 'react'
import './Content.css'
import {Link} from 'react-router-dom';


import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

function Content() {
  return (


    







    // ---------------------------------------/---------------------------------
    <div className='Content-baground' >

<nav className="navbar">
      <ul className="nav-list">
        {/* <li className="nav-item">Cars</li>
        <li className="nav-item">home </li>
        <li className="nav-item"> About us</li>

        <li className="nav-item"> all Car</li>
        <li className="nav-item"> Contact us</li>
        <li className="nav-item"> login</li> */}


        <li className="nav-item">Cars</li>
     

     <Link to='/' ><li className="nav-item">home </li></Link>
   
      <Link to='/Newabout' ><li className="nav-item"> About us</li></Link>
    
      <Link to='/Allcars' ><li className="nav-item"> All Car</li></Link>


      <Link to='/Content' ><li className="nav-item"> Contact us</li></Link>



    
     <li className="nav-item"> login</li>




      </ul>
    </nav>     





      <center>
      <div className='Content-Box'>

        <div className= 'Content-Box1'>
              <div className='Content-text'>  Contact Us</div>
              <div className='Content-text1'> Please fill this form in a decent manner</div>
        </div>
        <div className='Content-Display'>

              <div  className='Content-Display' >
                <label className='name'>Name</label>
                <input type='text'placeholder=''className='feild'></input>          
              </div> 
       <div  className='Content-Display' >
                <label className='name'>Email Id</label>
                <input type='email'placeholder=''className='feild'></input>          
       </div> 
       <div  className='Content-Display' >
                <label className='name'>Message</label>
                <input type='text'placeholder=''className='feild1'></input>          
       </div> 

       <div className='Submit1'>

        <button className='Submit'> Submit </button>

       </div>

        </div>

      </div>



      </center>


      <br></br> <br></br>
        <br></br>
      
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

export default Content