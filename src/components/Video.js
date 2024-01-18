import React from 'react'
import ReactPlayer from 'react-player'
import "../styles/Video.css"
import Home from '../pages/Home';
import { useNavigate } from 'react-router-dom';



function Video(){
    const videoTest = "https://www.youtube.com/watch?v=rFVpSwgCkCo";
    const videoIntro = "";
    const navigate = useNavigate();
    const videoEnded= () => {
        console.log("Hey");
        navigate('/home')
        
    }
    const passerVideo = () => {
        console.log("Clic");
        navigate('/home')
        
    }

    return (
        <>
            <div>
                <button onClick={passerVideo}>Passer la vidéo</button>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, recusandae?</p>
               
            </div>
        </>

    )
}

        

export default Video 