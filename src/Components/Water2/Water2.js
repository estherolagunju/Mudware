import './Water2.css';
import Images from'./../Images/Trans.svg';

const Water2 = ({toggleModal2}) => {
    return (
        <div 
        onClick={toggleModal2}
         className='water2'>  
            <div className='rightwater2'>
                <p className='writeup2'>WBM PV at HTHP conditions</p>
             <div className='water-result'>
             <img src= {Images} alt="" className='water2-img'/>
             <div className='water-con'>
                 <p className='water-final'>34.4 </p>
             </div> 
             <p className='water-cp'>cP</p>  
             </div>   
            </div>
        </div>
        
    )
}

export default Water2;