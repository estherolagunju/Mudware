import './OilWater.css';
import Images from'./../Images/Oil.svg';

const Oil = () => {
    return (
        <div
         className='mudd'> 

          <div className='card2'>
            <img src= {Images} alt="" className='oil-img'/>
            <p className='comm'>Oil-based Mud </p>
            </div>
        </div>
        
    )
}

export default Oil;