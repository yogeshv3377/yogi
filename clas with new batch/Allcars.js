import React from 'react'
import './Allcar.css';

import {Link} from 'react-router-dom';


import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';





function Allcars() {
  return (
    <div className='Allcars-Body'>
      
      <div className='Allcars-baground'>

      


      <nav className="navbar">
      <ul className="nav-list">
        {/* <li className="nav-item">Cars</li>
        <li className="nav-item">home </li>
        <li className="nav-item"> About us</li>
        <Link to='/Content' ><li className="nav-item"> About us</li></Link>

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









        <div className="page-container">
      <div className="left-side">
        <p> Tata Tiago buyers- Mileage, Price, Service Cost. <br></br> You can also ask your question about Tata Tiago.</p>
      
        Tata Tiago Price in India starts at Rs. 5.60 Lakh.  < br></br>Check out Tata Tiago Colours, Review, Images and Tiago Variants On Road Price at Carwale.com.

      </div>
      <div className="right-side">
        <img src="https://cars.tatamotors.com/images/tiago/features/performance/dynamic-performance-01.jpg" alt="Image" />
      </div>
    </div>






    
    <div className="page-container1">
      <div className="left-side1">
        <p> The Altroz is a 5 seater 4 cylinder car and has length of 3990mm, width of 1755 and a wheelbase of 2501. 
           Read More. Ad. Tata Altroz Brochure. Download the ...
           <br></br> <br></br>
           The ex-showroom price of Tata Altroz ranges from ₹ 6.60 - 10.74 Lakh*. Tata Altroz is available in 2 options - petrol and diesel.
            Select your preferred city</p>
        </div>

        <div className="right-side1">
        <img src="https://cars.tatamotors.com/images/altroz/features/laser-look/laser-feature.jpg" alt="Image" />
      </div>


    </div>
    <div className='page-container2'>
      <div className='Left-side2'>
        <p> Tata Nexon - Explore Tata Nexon features, specs, variants, reviews, colors, gallery & more. 
          Checkout all new Tata Nexon 2023 today!
<br></br>  <br></br>
          Tata Nexon price ranges starts from ₹ 8.10 Lakh to ₹ 15.50 Lakh (ex-showroom price).
          Tata Nexon is available in 3 options - petrol, diesel and automatic.</p>
      </div>
      <div className='Right-side2'>
        <img src='https://cars.tatamotors.com/images/nexon-2023/color/creative-ocean-d-color.jpg'></img>
      </div>

    </div>





    <div className="page-container3">
      <div className="left-side3">
        <p>
        Travel longer distances with the increased mileage of 20.09 km/l in MT & 18.80 km/l in AMT.
        
        <br></br> Unlock worry-free driving with the extended standard warranty of 3 years / 1 lakh in PUNCH.
        <br></br>
         Foliage Green Color. Gun Metal Skid Plate* Tata PUNCH CAMO Edition.
            </p>
      </div>
      <div className="right-side3">
        <img src="https://cars.tatamotors.com/images/punch/colors/foliage-green-desktop.jpg" alt="Image" />
      </div>
    </div>


{/* ------------------------------------//-------------------------------------------- */}




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

      </div>
  )
}

export default Allcars