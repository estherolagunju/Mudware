import './Landing.css';
import Images from'./../Images/Mudware.svg';

const Landing = () => {
    return (
        <div className='landing'>
            <img src= {Images} alt="" className='mudware-img'/>
        </div>
    )
}

export default Landing;