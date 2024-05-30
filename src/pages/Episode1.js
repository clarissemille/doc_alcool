import React, { useState } from 'react';
import "../styles/Episode.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';

function Episode1() {
    const navigate = useNavigate();

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
                    <p onClick={accueil}> {getTranslation("Accueil")}</p>
                    <p onClick={next}>{getTranslation("Suivant")}</p>
                </div>
                <div>

                    <img src={getTranslation("Episode1")} alt="Episode 1" />
                </div>
    
                <div className='videoEp1'>
                    <div className='leftVideo'>
                        <img   src={getTranslation("Problematique1")} alt="Problématique" className="problematique" />
                        <p>{getTranslation("Question1A")}</p>
                        <p>{getTranslation("Question1B")}</p>
                        <img src="assets/img/episodes/episode1/bouteille.png" alt="bouteille" className='imgBouteille' />
                    </div>
                    <img className="imgVideo" src="assets/img/episodes/episode1/VideoEp1.png" alt="" />

                </div>
                <div>
                   
                        <img src="assets/img/episodes/episode1/Ep1txt1.png" alt="" />
                     
                    <img src="assets/img/episodes/episode1/imgs1.png" alt="" />


                </div>
                <div>
                    <img src="assets/img/episodes/episode1/imgs2.png" alt="" />
                    <img src="assets/img/episodes/episode1/Ep1txt1.png" alt="" />
                     

               


                </div>

             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode1;