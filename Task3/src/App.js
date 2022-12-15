import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Sidebar from './component/Sidebar';



function App() {
  let[finalData, setFinalData] = useState([]);
  
  function returnsData(received){
     setFinalData(received) 
     
  }
 
  
  return (
    <>
    <Navbar/>
    
    <div className="App">
      <Form  returns={returnsData}/>
     
      <Sidebar data={finalData}/>
      
    </div>
    </>
  );
}

export default App;
