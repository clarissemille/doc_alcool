import React from 'react';
import '../styles/Home.css';

import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate = useNavigate();
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
                        <img className="episode1" src="/assets/img/episodes/episode1.png" alt="" onClick={fiche1} />
                        <img className="episode2" src="/assets/img/episodes/episode2.png" alt="" onClick={fiche2} />
                        <img className="episode3" src="/assets/img/episodes/episode3.png" alt="" onClick={fiche3}/>
                        <img className="episode4" src="/assets/img/episodes/episode4.png" alt="" onClick={fiche4}/>

                        <img className="bonus" src="/assets/img/annexes/bonus.png" alt="" onClick={bonus}/>
                        <img className="sources" src="/assets/img/annexes/sources.png" alt="" onClick={sources}/>
                        <img className="medias" src="/assets/img/annexes/medias.png" alt="" onClick={medias}/>
                        <img className="histoire" src="/assets/img/annexes/histoire.png" alt="" onClick={histoire}/>

                        <img className="map" src="/assets/img/illus/map_korea.png" alt="" />
                        <img className="trinquer" src="/assets/img/illus/trinquer.png" alt="" />
                        <img className="apero" src="/assets/img/illus/apero.png" alt="" />
                        <img className="apero2" src="/assets/img/illus/apero.png" alt="" />
                        <img className="vin" src="/assets/img/illus/vin.png" alt="" />
                        <img className="vin2" src="/assets/img/illus/vin.png" alt="" />
                        <img className="digestif" src="/assets/img/illus/digestif.png" alt="" />
                        <img className="digestif2" src="/assets/img/illus/digestif.png" alt="" />
                        <img className="irish_coffee" src="/assets/img/illus/irish_coffee.png" alt=""/>
                        <img className="irish_coffee2" src="/assets/img/illus/irish_coffee.png" alt=""/>
                        <img className="university" src="/assets/img/illus/university.png" alt="" />
                        
                        <img className="les_episodes" src="/assets/img/les_episodes.png" alt=""/>
                        <img className="lire_episodes" src="/assets/img/lire_tous_les_episodes.png" alt="" />
                        <img className="annexes" src="/assets/img/annexes.png" alt="" />
                        <img className="introduction" src="/assets/img/introduction.png" alt="" />
                        
                        
                        <img className="etoile" src="/assets/img/illus/etoile.png" alt="" />
                        <img className="etoile2" src="/assets/img/illus/etoile.png" alt="" />
                        <img className="etoile3" src="/assets/img/illus/etoile.png" alt="" />
                        <img className="valise" src="/assets/img/illus/valise.png" alt="" />
                        <img className="biere" src="/assets/img/illus/biere.png" alt="" />
                        <img className="exclamation" src="/assets/img/illus/exclamations.png" alt="" />
                        <img className="exclamation2" src="/assets/img/illus/exclamations.png" alt="" />
                        <img className="vague" src="/assets/img/illus/vague.png" alt="" />


                        



        </div>
            
    );
}

export default Home;