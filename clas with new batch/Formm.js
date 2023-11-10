import React, { useState } from 'react'

const Formm = () => {

    const [formdata,setFormdata]=useState(
    {
      firstName:'',
      lastName:'',
      email:'',  
    }
    );
    
  
    const handleChange=(event)=>{
     
        const {name,value}=event.target;
        setFormdata(
            {
                ...formdata,
                [name]:value,
            }
        )
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("form data", formdata)
        setFormdata({
            firstName:'',
            lastName:'',
            email:'',
        });
    }

   
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='FirstName' name='FirstName'  required  onChange={handleChange}  value={FormData.firstName}/> <br />
            <input type="text" placeholder='LastName'  name='LstName' onChange={handleChange} required  value={FormData.lastName}/> <br />
            <input type="email" placeholder='EnterEmail' name='EnterEmail' onChange={handleChange} required value={FormData.email}/> <br />
            
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Formm