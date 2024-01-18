import React from 'react';
import Episode from './Episode';
import '../styles/Episodes.css'
import img from '../assets/img/bouteille.png';
import img1 from '../assets/img/bouteille1.png';


function Episodes() {
    const episode1 = () => {
        console.log("Episode 1");
    }
    const episode2 = () => {
        console.log("Episode 2");
    }
    const episode3 = () => {
        console.log("Episode 3");
    }
    const episode4 = () => {
        console.log("Episode 4");
    }
    const episode5 = () => {
        console.log("Episode 5");
    }
    const episode6 = () => {
        console.log("Episode 6");
    }

    return (
        <div className='grille'>
            <div className="episode"> <img src={img} onClick={episode1} alt="" /></div>
            <div className="episode"> <img src={img} onClick={episode2} alt="" /></div>
            <div className="episode"> <img src={img} onClick={episode3} alt="" /></div>
            <div className="episode"> <img src={img} onClick={episode4} alt="" /></div>
            <div className="episode"> <img src={img} onClick={episode5} alt="" /></div>
            <div className="episode"> <img src={img} onClick={episode6} alt="" /></div>
          

        </div>
    );
}

export default Episodes;