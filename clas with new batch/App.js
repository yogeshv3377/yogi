import React from "react";
// import Login from "./Login";
// import Hooks from "./Hooks";
// import New from "./New";

// import { BrowserRouter as Router ,Link, Routes , Route } from "react-router-dom";
// import Home from './Home'
// import Allcars from './Allcars'
// import Content from './Content'
// import Newabout from './Newabout'
// import Wednesday from "./Wednesday";
// import Form from "./Form";
// import Formm from "./Formm";
// import Practice from "./Practice";
// import Friday from "./Friday";
// import Formdata from "./Formdata";


// import Form from "./Friday";




// import Formdata from "./Formdata";

// import RegistrationForm from "./Assenment";

import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Assenment2 from "./Assenment2"




function App() {
  return (
    <div>
 
 

{/* 
     <Router>
      <Routes>

      <Route path='/' element={ <RegistrationForm/>}/>
      <Route path='/Formdata' element={ <Formdata/>}/>


        
      </Routes>
     </Router> */}

<Router>
      <Routes>

      <Route path='/' element={ <Assenment2/>}/>
      {/* <Route path='/Formdata' element={ <Formdata/>}/> */}


        
      </Routes>
     </Router>







      {/* <Home/>
    
      <Allcars/> 
      <About/>
      <Newabout/>
      <Content/>
      <Newlogin/> */}

      {/* <Simple/> */}
      

        {/* <Hooks/> */}
        {/* <New/> */}
        {/* <Wednesday/> */}
        {/* <Formm/> */}
        {/* <RegistrationForm/> */}
        {/* <Practice/> */}
        {/* <Friday/> */}
        {/* <Formdata/> */}
        {/* <Form/> */}
        {/* <Assenment2/> */}
        

    </div>
  );
}

export default App;
