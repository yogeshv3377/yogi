import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';



function Formdata() {
    const Data=useLocation().state.SubmitedData;

  return (
    <div>
        <h1>Form date</h1>
        <p> {Data.name}</p>
        <p> {Data.dateofbirth}</p>
        <p> {Data.email}</p>
        <p> {Data.password}</p>



    </div>
  )
}

export default Formdata