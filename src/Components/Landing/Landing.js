import './Landing.css';
import Images from'./../Images/Mudware.png';

const Landing = () => {
    return (
        <div className='landing'>
            <img src= {Images} alt="" className='mudware-img'/>
        </div>
    )
}

export default Landing;