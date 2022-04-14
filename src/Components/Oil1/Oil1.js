import React, {useState} from 'react';
import './Oil1.css';
import Images from'./../Images/Oil.svg';
import Oil2 from '../Oil2/Oil2';

const 
Oil1 = ({changeDisplay}) => {

const [oilModal,setOilModal]= useState(false)   


function toggleOilModal () {
    setOilModal(!oilModal)   
}

    return (
        <div className='oil1'>
            <div className='rightoil1'>
                <p
                 onClick={changeDisplay}
                 className='oil-arrow'>&#x2190;</p>
            <img src= {Images} alt="" className='oil1-img'/>
            <p className='writeupoil1'>Oil-based Mud </p>
            </div>

            <div class="oil-form">
            <label className="oil-pressure"> Pressure (psi)</label>
            <input id="oil-pressure" type="text" placeholder='e.g 1035' />
            <label className="oil-temperature"> Temperature (celsius)</label>
            <input id="oil-temperature" type="text" placeholder='e.g 90' />
            <label className="oil-initial"> Initial Plastic Viscosity (cP)</label>
            <input id="oil-initial" type="text" placeholder='e.g 3.5' />
          </div>

          <div>
              <button
              onClick={toggleOilModal}
               className='btn-oil-modal'>Calculate</button>
              <div   onClick={changeDisplay}
              >
              <p className='oil-sw'>Switch to </p>
              <p className='oil-sp'>Water-based Mud</p>
              </div>
          </div>
    
            {oilModal &&  <Oil2   toggleModal2={toggleOilModal}  />}

        </div>
        
    )
}

export default Oil1;