import React, { useState } from 'react';
import "../styles/Sources.css";
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
  



    return (
        <>
            <div className='episode'>
                <div className='header'>
                    <img src={getTranslation("Accueil")} alt="" onClick={accueil} className='retourAccueil'/>
                </div>
                <div>
                    <img src={getTranslation("Sources")} alt="Sources" className='Sources' />
                </div>
                <div className='container'>
                <div className='sourcesLeft'>   
                    <img   src={getTranslation("sourcesBiblio1")} alt="Problématique" className="" />
                    <img src="assets/img/fr/annexes/sources/sourcesImgs2.png" alt="" className='sourcesImgs2' />
                </div>
                <div className='sourcesRight'>
                    <img src="assets/img/fr/annexes/sources/sourcesImgs1.png" alt=""  />
                    <img   src={getTranslation("sourcesBiblio2")} alt="Problématique" className="" />
                </div>
                </div>
             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode4;