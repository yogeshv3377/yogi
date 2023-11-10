import React, {useState} from 'react'


const Practice  =() =>{
    const [formdata,setFormdata]=useState(
        {
        Firstname:'',
         LastName:'',
        }
    );

    const handleChange=(Event)=>{

        const{name,value}=Event.target;
        setFormdata(
        {
            ...formdata,
            [name]:value,

        }
     )

    }

    const handleSubmit=(event)=>{
        event.preventDatafault()
        console.log("form data",formdata)
        setFormdata({
            Firstname:'',
            LastName:'',
        })
    }



  return (
    <div>

            <center>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='Firstname' onChange={handleChange} value={setFormdata.Firstname}  placeholder='Enter irstname'/> <br/>
                    <input type='text' name='Lastname' onChange={handleChange} value={setFormdata.Lastname}  placeholder='Lastname'/>
                
                </form>
            </center>


    </div>
  )
}

export default Practice