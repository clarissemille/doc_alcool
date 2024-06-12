import React, { useState } from 'react';
import "../styles/Episode4.css";
import data from "../datas/langues.json";
import Langues from '../components/Langues';
import { useNavigate } from 'react-router-dom';

function Episode4() {
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
        navigate('/episode3')
    }



    return (
        <>
            <div className='episode'>
                <div className='header'>
                    <p onClick={accueil}> {getTranslation("Accueil")}</p>
                    <p onClick={previous}>{getTranslation("Precedent")}</p>
                    
                </div>
                <div>

                    <img src={getTranslation("Episode4")} alt="Episode 4" className='IrishCoffee' />
                </div>
    
                <div className='videoEp1'>
                    <div className='leftVideo'>
                        <img   src={getTranslation("Problematique4")} alt="Problématique" className="problematique" />
                    
                        <img src="assets/img/fr/episodes/episode4/imgs4A.png" alt="bouteille" className='imgs4A' />
                    </div>
                    <img  src="assets/img/fr/episodes/episode1/VideoEp1.png" alt='' className="imgVideo" />

                </div>
                <img   src={getTranslation("Ep4Partie1")} alt="Problématique" className="partie1" />

                <div>
                   
                        
                <img   src={getTranslation("Ep4Txt1")} alt="Problématique" className="" />
                     
                    <img src="assets/img/fr/episodes/episode4/imgs4B.png" alt="" />


                </div>
                <img   src={getTranslation("Ep4Partie2")} alt="Problématique" className="partie2" />

                <div className='Ep4partie2'>
                        
                    <img src="assets/img/fr/episodes/episode4/imgs4C.png" alt="" className='imgPartie2' />
                    <img   src={getTranslation("Ep4Txt2")} alt="Problématique" className="txtPartie2" />

                </div>
             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode4;