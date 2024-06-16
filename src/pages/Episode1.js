import React, { useState } from 'react';
import "../styles/Episode.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Episode1() {
    const navigate = useNavigate();
    const videoTest = "https://www.youtube.com/watch?v=rFVpSwgCkCo";
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

    const next = () => {
        navigate('/episode2')
    }

    return (
        <>
            <div className='episode'>
                <div className='header'>
                    <img src={getTranslation("Accueil")} alt="" onClick={accueil} className='retourAccueil'/>
                    <img src={getTranslation("Suivant")} alt="" onClick={next} className='epSuivant'/>
                </div>
                <div>

                    <img src={getTranslation("Episode1")} alt="Episode 1" className='episode1Apero' />
                </div>
    
                <div className='videoEp1'>
                    <div className='leftVideo'>
                        <img   src={getTranslation("Problematique1")} alt="Problématique" className="problematique" />
                        <p>{getTranslation("Question1A")}</p>
                        <p>{getTranslation("Question1B")}</p>
                        <img src="assets/img/fr/episodes/episode1/bouteille.png" alt="bouteille" className='imgBouteille' />
                    </div>
                    <img   src={getTranslation("video1Img")} alt="texte 1" className="imgVideo" onClick={lancerVideo} />
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
                <div className='ep1txt1Container'>
                   
                        
                    <img   src={getTranslation("Ep1txt1")} alt="texte 1" className='ep1txt1' />
                     
                    <img src="assets/img/fr/episodes/episode1/imgs1.png" alt="" className='ep1txt1img' />


                </div>
                <div className='ep1txt1Container'>
                    <img src="assets/img/fr/episodes/episode1/imgs2.png" alt="" className='ep1txt1img '/>
                    <img   src={getTranslation("Ep1txt2")} alt="texte 1" className='ep1txt1'  />
                     

               


                </div>

             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode1;