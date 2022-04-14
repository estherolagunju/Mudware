import React,{useState} from 'react';
import './Water1.css';
import Water2 from './../Water2/Water2';
import Images from'./../Images/Water.svg';

const Water1 = ({Click}) => {

    const [waterModal,setWaterModal]= useState(false) 
      

    function toggleWaterModal () {
        setWaterModal(!waterModal)
    }


    return (
        <div  
         className='water1'>
            <div  className='rightwater1'>

                <div
                  onClick={Click}>                
                 <p className='water-arrow' >
                    &#x2190;
                 </p>
                </div>
            <img src= {Images} alt="" className='water1-img'/>
            <p className='writeup1'>Water-based Mud </p>
            </div>

            <div class="water-form">
            <label className="water-pressure"> Pressure (psi)</label>
            <input id="water-pressure" type="text" placeholder='e.g 1035' />
            <label className="water-temperature"> Temperature (celsius)</label>
            <input id="water-temperature" type="text" placeholder='e.g 90' />
            <label className="water-initial"> Initial Plastic Viscosity (cP)</label>
            <input id="water-initial" type="text" placeholder='e.g 3.5' />
          </div>

          <div>
              <button
              onClick={toggleWaterModal}
               className='btn-water-modal'>Calculate</button>
              <div  onClick={Click}> 
              <p className='water-sw'>Switch to </p>
              <p className='water-sp'>Oil-based Mud</p>
              </div>
          </div>
    
            {waterModal &&  <Water2 toggleModal2={toggleWaterModal} />}
            
        </div>
        
    )
}

export default Water1;