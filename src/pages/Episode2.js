import React, { useState } from 'react';
import "../styles/Episode.css";
import "../styles/Episode2.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Episode2() {
    const navigate = useNavigate();

    const videoTest = "https://www.youtube.com/watch?v=jSBDsuvLSr4";
    const videoEnded= () => {
        document.querySelector(".Video1").style.visibility="hidden";
        document.querySelector(".videoEpisode1").style.visibility="hidden";
        document.querySelector(".btnRetour").style.visibility="hidden";
        document.querySelector(".imgVideo").style.visibility="visible";
        
    }
    const lancerVideo = () => {
        document.querySelector(".imgVideo").style.visibility="hidden";
        document.querySelector(".Video1").style.visibility="visible";
        document.querySelector(".videoEpisode1").style.visibility="visible";
        document.querySelector(".btnRetour").style.visibility="visible";


    }

    const btnRetour = () => {
        document.querySelector(".imgVideo").style.visibility="visible";
        document.querySelector(".Video1").style.visibility="hidden";
        document.querySelector(".videoEpisode1").style.visibility="hidden";
        document.querySelector(".btnRetour").style.visibility="hidden";
    }


    const [langue, setLangue] = useState('fr');

    const getTranslation = (key) => {
        const entry = data.find(item => item.valeur === key);
        return entry ? entry.langue[langue] : key;
    };

    const accueil = () => {
        navigate('/home')

    }
    const previous = () => {
        navigate('/episode1')
    }

    const next = () => {
        navigate('/episode3')
    }

    return (
        <>
            <div className='episode'>
                <div className='header'>
                <img src={getTranslation("Accueil")} alt="" onClick={accueil} className='retourAccueil'/>
                    <div className='previousNextEpisode'>
                        <img src={getTranslation("Precedent")} alt="" onClick={previous} className='epPrecedent'/>
                        <img src={getTranslation("Suivant")} alt="" onClick={next} className='epSuivant'/>
                    </div>
                </div>
                <div>

                    <img src={getTranslation("Episode2")} alt="Episode 1" className='vinDeTable'/>
                </div>
    
                <div className='videoEp2'>
                    <div className='leftVideo2'>
                        <img   src={getTranslation("Problematique2")} alt="Problématique" className="problematique" />
                        <img   src={getTranslation("Partie1")} alt="Problématique" className="problematique2" />
                        <img src="assets/img/fr/episodes/episode2/imgs2A.png" alt="" className='image1' />
                    </div>
                    <img   src={getTranslation("video2Img")} alt="texte 1" className="imgVideo" onClick={lancerVideo}/>
                    <div className='Video1'>
                    <ReactPlayer 
                    url={videoTest}
                    controls
                    width="90%"
                    height="85%"
                    className="videoEpisode1"
                    onEnded={videoEnded}
                    />
                    <img src="assets/img/fr/retour.png" alt="" onClick={btnRetour} className='btnRetour' />
                </div> 

                </div>
                    <img src="assets/img/fr/episodes/episode2/imgs2B.png" alt="" className='image2' />
                <div className='TxtEp2 ep1txt1Container'>
                   
                        
                <img   src={getTranslation("Ep2txt2")} alt="texte 1" className='ep1txt1'  />
                    <img src="assets/img/fr/episodes/episode2/imgs2C.png" alt="" className='ep1txt1img'/>


                </div>
                <div className='TxtEp2 ep1txt1Container'>
                    <img src="assets/img/fr/episodes/episode2/imgs2D.png" alt="" className='ep1txt1img' />
                    <img   src={getTranslation("Ep2txt2")} alt="texte 1" className='ep1txt1' />
                     

               


                </div>
             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode2;