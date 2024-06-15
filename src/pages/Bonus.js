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


    const ep1 = () => {
        navigate('/episode1')
    }

    const ep2 = () => {
        navigate('/episode2')
    }
    const ep3 = () => {
        navigate('/episode3')
    }
    const ep4 = () => {
        navigate('/episode4')
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
                        <img   src={getTranslation("IndexEp1")} alt="Problématique" className="IndexEp IndexEp1" onClick={ep1}/>
                        <img   src={getTranslation("IndexEp2")} alt="Problématique" className="IndexEp " onClick={ep2}/>
                        <img   src={getTranslation("IndexEp3")} alt="Problématique" className="IndexEp " onClick={ep3}/>
                        <img   src={getTranslation("IndexEp4")} alt="Problématique" className="IndexEp " onClick={ep4}/>
                </div>
                <img   src={getTranslation("IndexL3")} alt="Problématique" className="IndexL3" />

              
                </div>
             

            </div>
            <Langues langue={langue} setLangue={setLangue} />
        </>
    );
}

export default Episode4;