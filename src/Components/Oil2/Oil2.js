import './Oil2.css';
import Images from'./../Images/water2.png';

const Oil2 = () => {
    return (
        <div className='oil2'>  
            <div className='rightoil2'>
                <p className='writeupoil2'>WBM PV at HTHP conditions</p>
             <div className='result'>
             <img src= {Images} alt="" className='water-img'/>
             <div className='con'>
                 <p className='final'>34.4 </p>
             </div> 
             <p className='cp'>cP</p>  
             </div>   
            </div>
        </div>
        
    )
}

export default Oil2;