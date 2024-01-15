import React from 'react'
import ReactPlayer from 'react-player'
import "./Video.css"
import Home from '../pages/Home';

function Video(){
    const videoTest = "https://www.youtube.com/watch?v=rFVpSwgCkCo";
    const videoIntro = "";
    const videoEnded= () => {
        console.log("Hey");
        <Home />
    }

    return (
        <div className='videoIntroWrapper'>
            <ReactPlayer 
            url={videoTest}
            controls
            width="100%"
            height="80%"
            className="videoIntro"
            onEnded={videoEnded}
            />        
        </div> 
    )
}

export default Video 