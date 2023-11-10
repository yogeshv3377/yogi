
//
import React from 'react';
import New from './New';
//  import Content from './Content';
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Allcars from './Allcars';

function App() {
  return (
    <div className="App">
    {/* <Router>
    <Routes>


     <Route path='/' element={ <New/>}/>
     <Route path='/Content' element={ <Content/>}/>
     <Route path='/Allcars' element={ <Allcars/>}/>




       
         </Routes>  
     </Router>   */}
     <New/>
    {/* <Content/>  */}
    {/* <Allcars/> */}


    </div>
  );
}

export default App;
