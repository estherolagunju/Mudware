import React, {useState} from 'react';
import './MudWare.css';
import Images from'./../Images/Mudware.svg';
// import Water1 from './../Water1/Water1';
import OilWater from'./../OilWater/OilWater';
import Water1 from '../Water1/Water1';
import Oil1 from '../Oil1/Oil1';

const MudWare = () => {
    const [oil,setOil]=useState(false)
    const [water,setWater]=useState(false)
    const [oilWater,setOilWater]=useState(true)

    function handleOil() {
        setOil(!oil)
        setOilWater(false)
      }
    
      function handleWater() {
        setWater(!water)
        setOilWater(false)
      }
    return (
        <div className='mud'>
            <div className='left'>
            <img src= {Images} alt="" className='mudware'/>
            <p className='sub'>for predicting Plastic Viscosity of HTHP </p>
            </div>
            <div className='right'>
          
               {oilWater &&    <OilWater handleOil={handleOil} handleWater={handleWater}  />}
               {water  &&  <Water1 Click={()=>{setWater(false); setOilWater(true)}} />   }
               {oil &&    <Oil1 changeDisplay={()=>{setOil(false); setOilWater(true)}} /> }
            </div>
  
        </div>
        
    )
}

export default MudWare;