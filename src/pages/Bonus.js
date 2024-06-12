import React, { useState } from 'react';
import "../styles/Bonus.css";
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
        console.log("ok");
        navigate('/home')
    }
  



    return (
        <>
            <div className='episode'>
                <div className='header'>
                    <img src={getTranslation("Accueil")} alt="" onClick={accueil} className='retourAccueil'/>
                </div>
                <div>
                    <img src={getTranslation("Index")} alt="Index" className='Index' />
                </div>
                <div className='indexContainer'>
                <img   src={getTranslation("IndexL1")} alt="Problématique" className="IndexL1" />
                    
                <div className='IndexL2'>   
                        <img   src={getTranslation("IndexEp1")} alt="Problématique" className="IndexEp IndexEp1" />
                        <img   src={getTranslation("IndexEp2")} alt="Problématique" className="IndexEp " />
                        <img   src={getTranslation("IndexEp3")} alt="Problématique" className="IndexEp " />
                        <img   src={getTranslation("IndexEp4")} alt="Problématique" className="IndexEp " />
                </div>
                <img   src={getTranslation("IndexL3")} alt="Problématique" className="IndexL3" />

              
                </div>
             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode4;