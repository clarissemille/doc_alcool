import React from 'react';
import '../styles/Home.css';

import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();
    let fiche1 = () => {
        console.log("Episode 1");
        navigate('/episode1')
    }
    let fiche2 = () => {
        console.log("Episode 2");
        navigate('/episode2')
    }
    let fiche3 = () => {
        console.log("Episode 3");
        navigate('/episode3')
    }
    let fiche4 = () => {
        console.log("Episode 4");
        navigate('/episode4')
    }
    let bonus = () => {
        console.log("Bonus");
        navigate('/bonus')
    }

    return (
        <div className='homepage'>
                        <img className="episode1" src="/assets/img/episode1.png" alt="" onClick={fiche1} />
                        <img className="episode2" src="/assets/img/episode2.png" alt="" onClick={fiche2} />
                        <img className="episode3" src="/assets/img/episode3.png" alt="" onClick={fiche3}/>
                        <img className="episode4" src="/assets/img/episode4.png" alt="" onClick={fiche4}/>
                        <img className="bonus" src="/assets/img/Bonus.png" alt="" onClick={bonus}/>
        </div>
            
    );
}

export default Home;