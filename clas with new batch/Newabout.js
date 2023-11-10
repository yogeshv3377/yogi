import React from 'react';
import './Newabout.css';
import {Link} from 'react-router-dom';



import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

function App() {
  return (
    <div className="App">

<nav className="navbar">
      <ul className="nav-list">
       
        <li className="nav-item">Cars</li>
     

     <Link to='/' ><li className="nav-item">home </li></Link>
   
      <Link to='/Newabout' ><li className="nav-item"> About us</li></Link>
    
      <Link to='/Allcars' ><li className="nav-item"> All Car</li></Link>


      <Link to='/Content' ><li className="nav-item"> Contact us</li></Link>



    
     <li className="nav-item"> login</li>

        
      </ul>
    </nav>












      <header className="App-header">
        <img src="https://cars.tatamotors.com/images/4-million-desktop-new.png" alt="Your Image" className='img-123' />
      </header>
      <main>
        <div className="text-container">
          <h1>Welcome to My Image Page</h1>
          <p>As one of India’s foremost home-grown automotive brands, we are delighted to have reached this significant milestone for our passenger vehicles segment. We
          are honoured to have the legendary Mr. Anupam Kher as the narrator of the glorious journey of a brand that is a legend in itself. This film is a testament to not
          only our evolutionary growth over the last 30 years but also the growth that India has seen as a nation through this period. This narration celebrates Tata
          Motors and all those who have supported us in these years, as we continue to provide class-defining products to our consumers, thereby allowing us to be
          thought leaders in the realm of design, safety and performance...
          
          <br></br>
          <br></br>
          
          Historically, Tata Motors has always broken barriers and created new benchmarks by consistently bringing innovative products that cater to the ‘Indian’ customer,
           thus contributing to an ‘Atmanirbhar’ or a ‘self-reliant’ India, since the very beginning. Our recently launched BS6 range of products further solidifies 
           our commitment towards our customers, as we prepare ourselves to not only become future ready by staying New Forever but by also carving the road to safer mobility in India.
          
          
          
          
          </p>
        </div>
      </main>



{/* -------------------------------------------------footer------------- */}

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
  );
}

export default App;
