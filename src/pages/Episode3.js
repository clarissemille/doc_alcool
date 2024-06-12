import React, { useState } from 'react';
import "../styles/Episode3.css";
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
                <img src={getTranslation("Accueil")} alt="" onClick={accueil} className='retourAccueil'/>
                    <div className='previousNextEpisode'>
                        <p onClick={previous}>{getTranslation("Precedent")}</p>
                        <p onClick={next}>{getTranslation("Suivant")}</p>
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
                    <img className="imgVideo" src="assets/img/fr/episodes/episode1/VideoEp1.png" alt="" />

                </div>


                <img   src={getTranslation("Ep3Partie1")} alt="Problématique" className="Ep3Partie1" />
                <div>
                   
                        
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" />
                     
                    <img src="assets/img/fr/episodes/episode3/imgs3B.png" alt="" />


                </div>
                <img   src={getTranslation("Ep3Partie2")} alt="Problématique" className="Ep3Partie2" />

                <div>
                    <img src="assets/img/fr/episodes/episode3/imgs3C.png" alt="" />
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" />
                </div>
                <img   src={getTranslation("Ep3Partie3")} alt="Problématique" className="Ep3Partie3" />
                <div className='parties'> 
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" className='imgpartie4' />
                     
                    <img src="assets/img/fr/episodes/episode3/imgs3D.png" alt="" className='imgpartie4' />

                </div>
                <img   src={getTranslation("Ep3Partie4")} alt="Problématique" className="Ep3Partie4" />

                <div className='partie4'>
                    <img src="assets/img/fr/episodes/episode3/imgs3E.png" alt="" className='imgpartie4'/>
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" className='img2partie4' />

                </div>

             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode3;