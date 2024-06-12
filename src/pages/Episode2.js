import React, { useState } from 'react';
import "../styles/Episode.css";
import "../styles/Episode2.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';

function Episode2() {
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
                        <p onClick={previous}>{getTranslation("Precedent")}</p>
                        <p onClick={next}>{getTranslation("Suivant")}</p>
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
                    <img className="imgVideo2" src="assets/img/fr/episodes/episode1/VideoEp1.png" alt="" />

                </div>
                    <img src="assets/img/fr/episodes/episode2/imgs2B.png" alt="" className='image2' />
                <div className='TxtEp2'>
                   
                        
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" className='ep2txt' />
                    <img src="assets/img/fr/episodes/episode2/imgs2C.png" alt="" className='ep2img'/>


                </div>
                <div className='TxtEp2'>
                    <img src="assets/img/fr/episodes/episode2/imgs2D.png" alt="" className='ep2img' />
                    <img src="assets/img/fr/episodes/episode1/Ep1txt1.png" alt="" className='ep2txt'/>
                     

               


                </div>

             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode2;