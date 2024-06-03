import { useState } from 'react';
import Langues from '../components/Langues';
import '../styles/Home.css';
import data from "../datas/home.json";


import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();
    const [langue, setLangue] = useState('fr');

    const getTranslation = (key) => {
        const entry = data.find(item => item.valeur === key);
        return entry ? entry.langue[langue] : key;
    };


    let fiche1 = () => {
        navigate('/episode1')
    }
    let fiche2 = () => {
        navigate('/episode2')
    }
    let fiche3 = () => {
        navigate('/episode3')
    }
    let fiche4 = () => {
        navigate('/episode4')
    }
    let bonus = () => {
        navigate('/bonus')
    }
    let sources = () => {
        navigate('/sources')
    }
    let medias = () => {
        navigate('/medias')
    }
    let histoire = () => {
        navigate('/histoire')
    }

   

    return (
        <div className='homepage'>

                        <img className="lire_episodes" src={getTranslation("ListeEpisodes")} alt="" />
                        <img className="introduction" src={getTranslation("Introduction")} alt="" />
                        <img className="les_episodes" src={getTranslation("LesEpisodes")} alt=""/>
                        <img className="annexes" src={getTranslation("Annexes")} alt="" />
                        
                        <img className="episode1" src={getTranslation("Episode1")} alt="" onClick={fiche1} />
                        <img className="episode2" src={getTranslation("Episode2")} alt="" onClick={fiche2} />
                        <img className="episode3" src={getTranslation("Episode3")} alt="" onClick={fiche3}/>
                        <img className="episode4" src={getTranslation("Episode4")} alt="" onClick={fiche4}/>

                        <img className="bonus" src={getTranslation("Bonus")} alt="" onClick={bonus}/>
                        <img className="sources" src={getTranslation("Sources")} alt="" onClick={sources}/>
                        <img className="medias" src={getTranslation("Medias")} alt="" onClick={medias}/>
                        <img className="histoire" src={getTranslation("Histoire")} alt="" onClick={histoire}/>
    
    
    {/* Illustrations */}
                        <img className="map" src="/assets/img/fr/illus/map_korea.png" alt="" />
                        <img className="trinquer" src="/assets/img/fr/illus/trinquer.png" alt="" />
                        <img className="apero" src="/assets/img/fr/illus/apero.png" alt="" />
                        <img className="apero2" src="/assets/img/fr/illus/apero.png" alt="" />
                        <img className="vin" src="/assets/img/fr/illus/vin.png" alt="" />
                        <img className="vin2" src="/assets/img/fr/illus/vin.png" alt="" />
                        <img className="digestif" src="/assets/img/fr/illus/digestif.png" alt="" />
                        <img className="digestif2" src="/assets/img/fr/illus/digestif.png" alt="" />
                        <img className="irish_coffee" src="/assets/img/fr/illus/irish_coffee.png" alt=""/>
                        <img className="irish_coffee2" src="/assets/img/fr/illus/irish_coffee.png" alt=""/>
                        <img className="university" src="/assets/img/fr/illus/university.png" alt="" />
                        
                        
                        <img className="etoile" src="/assets/img/fr/illus/etoile.png" alt="" />
                        <img className="etoile2" src="/assets/img/fr/illus/etoile.png" alt="" />
                        <img className="etoile3" src="/assets/img/fr/illus/etoile.png" alt="" />
                        <img className="valise" src="/assets/img/fr/illus/valise.png" alt="" />
                        <img className="biere" src="/assets/img/fr/illus/biere.png" alt="" />
                        <img className="exclamation" src="/assets/img/fr/illus/exclamations.png" alt="" />
                        <img className="exclamation2" src="/assets/img/fr/illus/exclamations.png" alt="" />
                        <img className="vague" src="/assets/img/fr/illus/vague.png" alt="" />

                         <Langues langue={langue} setLangue={setLangue}/>

                      
                        </div>

                        



            
    );
}

export default Home;