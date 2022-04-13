import './OilWater.css';
import Oil from'./Oil';
import Images from'./../Images/water.png';

const OilWater = ({handleWater,handleOil}) => {

    return (
        <div className='muud'>  
        <p>Select one</p>
            <div 
                onClick={handleWater}
                className='card1'
            >
                <img src= {Images} alt="" className='water-img'/>
                <p className='com'>Water-based Mud </p>
            </div>

          <div
          onClick={handleOil}
          >
              <Oil />
          </div>
        </div>
        
    )
}

export default OilWater;