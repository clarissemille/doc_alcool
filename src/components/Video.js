import React from 'react'
import ReactPlayer from 'react-player'
import "../styles/Video.css"
import Home from '../pages/Home';
import { useNavigate } from 'react-router-dom';



function Video(){
    const videoTest = "https://www.youtube.com/watch?v=rFVpSwgCkCo";
    const videoIntro = "";
    const videoEnded= () => {
        console.log("Hey");
       
    }
    const goToHome = useNavigate();

    return (
        <>
            <div>
                <button onClick={() => {
                    goToHome("/home");
                }}>
                    Passer la vidéo</button>
                <div className='videoIntroWrapper'>
                    <ReactPlayer 
                    url={videoTest}
                    controls
                    width="100%"
                    height="90%"
                    className="videoIntro"
                    onEnded={videoEnded}
                    />      
                </div> 
               
            </div>
        </>

    )
}

        

export default Video 