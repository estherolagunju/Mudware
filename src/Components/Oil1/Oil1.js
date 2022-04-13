import './Oil1.css';
import Images from'./../Images/oil.png';

const 
Oil1 = () => {
    return (
        <div className='oil1'>
            <div className='rightoil1'>
                <p className='arrow'>&#x2190;</p>
             {/* <img src= {Images} alt="" className='water-img'/> */}
            <img src= {Images} alt="" className='water-img'/>
            <p className='writeupoil1'>Oil-based Mud </p>
            </div>

            <div class="form">
            <label className="pressure"> Pressure (psi)</label>
            <input id="pressure" type="text" placeholder='e.g 1035' />
            <label className="temperature"> Temperature (celsius)</label>
            <input id="temperature" type="text" placeholder='e.g 90' />
            <label className="initial"> Initial Plastic Viscosity (cP)</label>
            <input id="initial" type="text" placeholder='e.g 3.5' />
          </div>

          <div>
              <button className='btn'>Calculate</button>
              <p className='sw'>Switch to </p>
              <p className='sp'>Water-based Mud</p>
          </div>
        </div>
        
    )
}

export default Oil1;