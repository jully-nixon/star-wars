import React, { useState } from 'react';
import './style.css';
import ModalDetailsStarships from '../ModalDetailsStarships';
import StarshipIcon from '../../assets/images/starships.png';
import StarshipsEmpty from '../../assets/images/empty.png';

const CardCharacters = ({ name, starshipsList }) => {
    const [modalShowData, setModalShowData] = useState(false);
    const [urlStarship, seturlStarship] = useState();

    const openModalDetailsStarship = (url) => {
        setModalShowData(true);
        seturlStarship(url);
    }

    return (
        <div className='card-characters'>
            <img
                className='card-characters-image'
                alt='characters'
                src='https://i.pinimg.com/564x/dd/c9/ff/ddc9ff5824819cddc799da222a2a2794.jpg' />
            <label className='card-characters-name'>{name}</label>

            <ul className='card-characters-starship-list'>
                <label className='card-characters-starship'>Starships:</label>
                {starshipsList.length
                    ?
                    starshipsList.map((starship, id) => {
                        return <li id='card-characters-starship' key={id}>
                            <img
                                className='card-characters-image-starship'
                                alt='starship'
                                src={StarshipIcon}
                                onClick={() => openModalDetailsStarship(starship)} />
                        </li>

                    })
                    :
                    <div>
                        <label className='card-characters-empty-message'>(Vazio)</label>
                        <img
                            className='card-characters-empty-image'
                            alt='starshipsEmpty'
                            src={StarshipsEmpty} />
                    </div>
                }
            </ul>

            <div>
                {modalShowData &&
                    <ModalDetailsStarships
                        show={modalShowData}
                        urlstarship={urlStarship}
                        onHide={() => setModalShowData(false)}
                    />
                }
            </div>
        </div>
    )
}

export default CardCharacters;