import './MudWare.css';
import Images from'./../Images/Mudware.png';
// import Water1 from './../Water1/Water1';
import OilWater from'./../OilWater/OilWater';

const MudWare = () => {
    return (
        <div className='mud'>
            <div className='left'>
            <img src= {Images} alt="" className='mudware'/>
            <p className='sub'>for predicting Plastic Viscosity of HTHP </p>
            </div>
            <div className='right'>
                {/* <Water1 /> */}
                <OilWater />
            </div>
        </div>
        
    )
}

export default MudWare;