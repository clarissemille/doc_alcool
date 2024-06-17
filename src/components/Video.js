import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import "../styles/Video.css"
import { useNavigate } from 'react-router-dom';
import data from "../datas/langues.json";
import Langues from './Langues';



function Video(){
    const videoTest = "https://www.youtube.com/watch?v=XnpzbUkY6rc";
    const navigate = useNavigate();
    const videoEnded= () => {
        navigate('/home')
        
    }

    const [langue, setLangue] = useState('fr');
    const getTranslation = (key) => {
        const entry = data.find(item => item.valeur === key);
        return entry ? entry.langue[langue] : key;
    };
    const passerVideo = () => {

        console.log("Clic");
        navigate('/home')
        
    }

    const lancerVideo = () => {
        document.querySelector(".imgVideo").style.visibility="hidden";
        document.querySelector(".videoIntro").style.visibility="visible";

    }

    return (
        <>
            <div className='IntroductionVideo'>
                <img src="assets/img/fr/passerVideo.png" alt="" onClick={passerVideo} className='passerVideo' />
                <div className=''>
                    <img   src={getTranslation("videoIntroImg")} alt="texte 1" className="imgVideo" onClick={lancerVideo}/>
                    <ReactPlayer 
                    url={videoTest}
                    controls
                    width="95%"
                    height="100%"
                    className="videoIntro"
                    onEnded={videoEnded}
                    />      
                </div> 


               
            </div>
            <Langues langue={langue} setLangue={setLangue} />

        </>


    )
}

        

export default Video 