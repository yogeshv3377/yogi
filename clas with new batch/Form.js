import React, { useState } from 'react'

const Form=() => {

   
    const [formData,setFormData]=useState({
        Firstname:'',
        Lastname:'',
        email:'',

    });

    const handelChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    };

    const handelSubmit=(e)=>{
        e.priventDefault();
        console.log("formData" ,formData)
        // setFormData({
        //     Firstname:"",
        //     Lastname:"",
        //     email:"",
        // })
    
    }

    
    


  return (

    <div>
    <form   onSubmit={handelSubmit} >

        <center>
   
            <input type='text' name='Firstname' value={FormData.Firstname } onChange={handelChange}  placeholder="FirstName" /> <br/>
            <input type='text' name='Lastname' value={FormData.Lastname } onChange={handelChange}  placeholder="LastName" />    <br/>
            <input type='email' name='email'  value={FormData.email } onChange={handelChange} placeholder="Email"/>              <br/>
            <button type='submit'>Submit</button>

            </center>
    </form>
     </div>
  )
}

export default Form;