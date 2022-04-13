import './Water2.css';
import Images from'./../Images/water2.png';

const Water2 = () => {
    return (
        <div className='water2'>  
            <div className='rightwater2'>
                <p className='writeup2'>WBM PV at HTHP conditions</p>
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

export default Water2;