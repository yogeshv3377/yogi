import React from 'react'
import './Content.css'

function Content() {
  return (
    <div>
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
    </div>
  )
}

export default Content