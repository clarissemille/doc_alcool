import React from 'react';

function Episode() {
    const lancerEpisode = () => {
        <div className='lancerEpisode'>{episode.video}</div>
    };

    return (
        <div className='episode' onClick={lancerEpisode}>
            <img src={episode.image}/>
            <div className='dataEpisode'>
                <ul>
                    <li>{episode.titre}</li>
                    <li>{episode.description}</li>
                </ul>

            </div>
            
        </div>
    );
}

export default Episode;