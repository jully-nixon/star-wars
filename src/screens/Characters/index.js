import React, { useEffect, useState } from 'react';
import './style.css';
import CardCharacters from '../../components/CardCharacters';
import Pagination from '../../components/Pagination';
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

const Characters = () => {
    const [charactersData, setCharactersData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [previoustUrl, setPrevioustUrl] = useState('');
    const [currentPage, setCurrentPage] = useState('');

    let [loading, setLoading] = useState(true);

    let baseURL = 'https://swapi.dev/api/people/?page=1';

    const getCharactersData = async (baseURL) => {
        await axios.get(baseURL)
            .then((response) => {
                setLoading(false);
                setCharactersData(response.data.results);
                setNextUrl(response.data.next);
                setPrevioustUrl(response.data.previous);
                setCurrentPage(((baseURL).split('='))[1]);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    const nextPage = () => {
        baseURL = nextUrl;
        getCharactersData(baseURL);
    }

    const previousPage = () => {
        baseURL = previoustUrl;
        getCharactersData(baseURL);
    }

    useEffect(() => {
        getCharactersData(baseURL);
    }, [baseURL]);

    return (
        <div id='characters'>

            <div className='characters-spinner'>
                <PacmanLoader
                    size='60px'
                    color='#0b79ce'
                    loading={loading}
                />
            </div>

            <ul className='characters-list'>
                {charactersData.map((character, id) => {
                    return <li key={id}>
                        <CardCharacters
                            name={character.name}
                            starshipsList={character.starships} />
                    </li>
                })}
            </ul>

            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                currentPage={currentPage}
                previoustUrl={previoustUrl}
                nextUrl={nextUrl}
            />

        </div>
    )
}

export default Characters;