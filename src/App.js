
import  { useState, useEffect } from "react";
import Landing from './Components/Landing/Landing';
import MudWare from './Components/MudWare/MudWare';
// import Water1 from './Components/Water1/Water1.js';
// import Oil1 from './Components/Oil1/Oil1';
// import Oil2 from './Components/Oil2/Oil2';
// import OilWater from './Components/OilWater/OilWater';
// import Water2 from './Components/Water2/Water2';
import './App.css';

const App =()=> {

  const [gold,setGold]=useState(true)



   useEffect (() => {
   setTimeout(()=>{setGold(false)}, 5000)
  }, [])
  



  return (
<div>
{gold?   ( <Landing />) : 
   (  <MudWare  /> ) }  
  
     {/* <Oil2 />  */}
     {/* <Water2 /> */}
   {/* <OilWater /> */}
  
</div>

  );
}

export default App;









// useEffect(() => {
//   const timeout = setTimeout(() => {
//     console.log('This will be called after 2 seconds');
//   }, m,2000);

//   return () => clearTimeout(timeout);
// }, []);


// export default App;

// 