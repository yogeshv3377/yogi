import React from 'react';
import './Assenment2.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (

    <div className='Body'>
{/* -------------------------------------------------navbhar start--------------------- */}
            <div className='Navbhar'>
                 <div className="navbar">
                     <div className="nav-links">
                            <a href="#contact">About</a>
                            <a href="#terms">Content us</a>
                            <a href="#privacy">Registration</a>
                     </div>
                 </div>

{/* -------------------------------------------------navbhar end--------------------- */}
{/* -------------------------------------------------sidebhar start--------------------- */}

  <div className='Sidebhar-body'>

        <div className='Sid-text'>

                <div className='Sid-text2'>
                        Today
                </div>

                <div className='Sid-text1'>
                    <input placeholder='+ New Chat'/>

                </div>


                <div className='Sid-text2'>
                         Yesterday
                </div>

                <div className='Sid-text1'>
                    <input placeholder=''/>

                </div>

                <div className='Sid-text2'>
                    Previous 7 Days
                       
                </div>

                <div className='Sid-text1'>
                <input placeholder='Newchat'/>                       
                </div>
                
                <div className='Sid-text1'>
                <input placeholder='NewchatContent Newchat'/>                       
                </div>

                <div className='Sid-text2'>
                    Previous 30 Days
                       
                </div>

                <div className='Sid-text1'>
                <input placeholder='Last Chat'/>                       
                </div>


            
        </div>
  </div>




{/* -------------------------------------------------sidebhar  end--------------------- */}



      </div>
    </div>
  );
};

export default NavBar;
