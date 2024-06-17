import React, { useState } from 'react';
import "../styles/Episode4.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Episode4() {
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
        navigate('/episode3')
    }



    return (
        <>
            <div className='episode'>
                <div className='header'>
                <img src={getTranslation("Accueil")} alt="" onClick={accueil} className='retourAccueil'/>
                <img src={getTranslation("Precedent")} alt="" onClick={previous} className='epPrecedent'/>
                    
                </div>
                <div>

                    <img src={getTranslation("Episode4")} alt="Episode 4" className='IrishCoffee' />
                </div>
    
                <div className='videoEp1'>
                    <div className='leftVideo'>
                        <img   src={getTranslation("Problematique4")} alt="Problématique" className="problematique" />
                    
                        <img src="assets/img/fr/episodes/episode4/imgs4A.png" alt="bouteille" className='imgs4A' />
                    </div>
                    <img   src={getTranslation("video4Img")} alt="texte 1" className="imgVideo" onClick={lancerVideo} />
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
                <img   src={getTranslation("Ep4Partie1")} alt="Problématique" className="partie1" />

                <div  className='ep1txt1Container'> 
                   
                        
                <img   src={getTranslation("Ep4Txt1")} alt="Problématique" className="ep1txt1" />
                     
                    <img src="assets/img/fr/episodes/episode4/imgs4B.png" alt="" className='ep1txt1img' />


                </div>
                <img   src={getTranslation("Ep4Partie2")} alt="Problématique" className="partie2" />

                <div className='Ep4partie2 ep1txt1Container'>
                        
                    <img src="assets/img/fr/episodes/episode4/imgs4C.png" alt="" className='imgPartie2 ep1txt1img' />
                    <img   src={getTranslation("Ep4Txt2")} alt="Problématique" className="txtPartie2 ep1txt1" />

                </div>
             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode4;