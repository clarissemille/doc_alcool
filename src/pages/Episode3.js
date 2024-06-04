import React, { useState } from 'react';
import "../styles/Episode.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';

function Episode3() {
    const navigate = useNavigate();

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
                    <p onClick={accueil}> {getTranslation("Accueil")}</p>
                    <div className='previousNextEpisode'>
                        <p onClick={previous}>{getTranslation("Precedent")}</p>
                        <p onClick={next}>{getTranslation("Suivant")}</p>
                    </div>
                </div>
                <div>

                    <img src={getTranslation("Episode3")} alt="Episode 3" />
                </div>
    
                <div className='videoEp1'>
                    <div className='leftVideo'>
                        <img   src={getTranslation("Problematique3")} alt="Problématique" className="problematique" />
                        <img   src={getTranslation("imgs3A")} alt="Problématique" className="problematique" />

                    </div>
                    <img className="imgVideo" src="assets/img/fr/episodes/episode1/VideoEp1.png" alt="" />

                </div>


                <img   src={getTranslation("Ep3Partie1")} alt="Problématique" className="problematique" />
                <div>
                   
                        
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" />
                     
                    <img src="assets/img/fr/episodes/episode3/imgs3B.png" alt="" />


                </div>
                <img   src={getTranslation("Ep3Partie2")} alt="Problématique" className="problematique" />

                <div>
                    <img src="assets/img/fr/episodes/episode3/imgs3C.png" alt="" />
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" />
                </div>
                <img   src={getTranslation("Ep3Partie3")} alt="Problématique" className="problematique" />
                <div> 
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" />
                     
                    <img src="assets/img/fr/episodes/episode3/imgs3D.png" alt="" />

                </div>
                <img   src={getTranslation("Ep3Partie4")} alt="Problématique" className="problematique" />

                <div>
                    <img src="assets/img/fr/episodes/episode3/imgs3E.png" alt="" />
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" />

                </div>

             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode3;