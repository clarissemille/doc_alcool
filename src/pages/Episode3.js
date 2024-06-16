import React, { useState } from 'react';
import "../styles/Episode3.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Episode3() {
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
    const previous = () => {
        navigate('/episode2')
    }

    const next = () => {
        navigate('/episode4')
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

                    <img src={getTranslation("Episode3")} alt="Episode 3" className='Digestif' />
                </div>
    
                <div className='videoEp3'>
                    <div className='leftVideo'>
                        <img   src={getTranslation("Problematique3")} alt="Problématique" className="problematique" />
                        <img   src={getTranslation("imgs3A")} alt="Problématique" className="imgs3A" />

                    </div>
                    <img   src={getTranslation("video3Img")} alt="texte 1" className="imgVideo" onClick={lancerVideo} />
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


                <img   src={getTranslation("Ep3Partie1")} alt="Problématique" className="Ep3Partie1" />
                <div className='ep1txt1Container'>
                   
                        
                <img   src={getTranslation("Ep3txt1")} alt="texte 1" className='ep1txt1'  />
                     
                    <img src="assets/img/fr/episodes/episode3/imgs3B.png" alt="" className='ep1txt1img' />


                </div>
                <img   src={getTranslation("Ep3Partie2")} alt="Problématique" className="Ep3Partie2" />

                <div className='ep1txt1Container'>
                    <img src="assets/img/fr/episodes/episode3/imgs3C.png" alt="" className='ep1txt1img'/>
                    <img   src={getTranslation("Ep3txt2")} alt="texte 1"  className='ep1txt1' />
                </div>
                <img   src={getTranslation("Ep3Partie3")} alt="Problématique" className="Ep3Partie3" />
                <div className='parties ep1txt1Container'> 
                <img   src={getTranslation("Ep3txt3")} alt="texte 1" className='ep3txt3' />
                     
                    <img src="assets/img/fr/episodes/episode3/imgs3D.png" alt="" className=' ep1txt1img' />

                </div>
                <img   src={getTranslation("Ep3Partie4")} alt="Problématique" className="Ep3Partie4" />

                <div className='partie4 ep1txt1Container'>
                    <img src="assets/img/fr/episodes/episode3/imgs3E.png" alt="" className=' ep1txt1img ep3txt4img'/>
                    <img   src={getTranslation("Ep3txt4")} alt="texte 1" className=" ep1txt1 ep3txt4" />

                </div>

             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode3;