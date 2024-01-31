import React from 'react';
import '../styles/Home.css';
import episode1 from '../assets/img/episode1.png'
import episode2 from '../assets/img/episode2.png'
import episode3 from '../assets/img/episode3.png'
import episode4 from '../assets/img/episode4.png'
import Episode1 from '../components/Episode1';
import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();
    let fiche1 = () => {
        console.log("Episode 1");
        navigate('/episode1')
    }
    let fiche2 = () => {
        console.log("Episode 2");
    }
    let fiche3 = () => {
        console.log("Episode 3");
    }
    let fiche4 = () => {
        console.log("Episode 4");
    }

    return (
        <div className='homepage'>
            <div className='leftside'>
                    <div className='firstepisode'>
                        <img className="episode1" src={episode1} alt="" onClick={fiche1} />
                    </div>
                    <div className='secondepisode'>
                        <img className="episode2" src={episode2} alt="" onClick={fiche2} />
                    </div>
            </div>
            <div className='rightside'>
                <div className='thrisepisode'>
                    <img className="episode3" src={episode3} alt="" onClick={fiche3}/>
                </div>
                <div className='forthepisode'>
                    <img className="episode4" src={episode4} alt="" onClick={fiche4}/>
                </div>
            </div>
            

            
        </div>
    );
}

export default Home;