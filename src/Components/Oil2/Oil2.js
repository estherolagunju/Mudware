import './Oil2.css';
import Images from'./../Images/Trans.svg';

const Oil2 = ({toggleModal2}) => {
    return (
        <div
        onClick={toggleModal2}
        className='oil2'>  
            <div className='rightoil2'>
                <p className='writeupoil2'>WBM PV at HTHP conditions</p>
             <div className='oil-result'>
             <img src= {Images} alt="" className='oil2-img'/>
             <div className='oil-con'>
                 <p className='oil-final'>34.4 </p>
             </div> 
             <p className='oil-cp'>cP</p>  
             </div>   
            </div>
        </div>
        
    )
}

export default Oil2;