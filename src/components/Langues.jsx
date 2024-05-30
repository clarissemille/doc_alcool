import React from 'react';
import "../styles/Langues.css";

const Langues = ({ langue, setLangue }) => {
    const [imgLangue, setImgLangue] = React.useState("assets/img/france.png");

    const cliquerLangue = () => {
        document.querySelector(".langue").style.visibility = "visible";
    };

    const choisirFr = () => {
        setLangue("fr");
        setImgLangue("assets/img/france.png");
        document.querySelector(".langue").style.visibility = "hidden";
    };

    const choisirEn = () => {
        setLangue("en");
        setImgLangue("assets/img/uk.png");
        document.querySelector(".langue").style.visibility = "hidden";
    };

    const choisirKr = () => {
        setLangue("kr");
        setImgLangue("assets/img/korea.png");
        document.querySelector(".langue").style.visibility = "hidden";
    };

    return (
        <>
            <img className="language" src={imgLangue} alt="" onClick={cliquerLangue} />
            <div className='langue'>
                <img src="assets/img/france.png" alt="" onClick={choisirFr} />
                <img src="assets/img/uk.png" alt="" onClick={choisirEn} />
                <img src="assets/img/korea.png" alt="" onClick={choisirKr} />
            </div>
        </>
    );
};

export default Langues;