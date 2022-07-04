import { useEffect, useState } from 'react';
import Character from './Character';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>Page: {props.page}</p>
            <button className='btn btn-primary btn-sm'
                onClick={()=> props.setPage(props.page  + 1)}
            >
                Page: {props.page}
            </button>
        </header>
    )
}
function CharacterList() {
    // almacenanmos los datos por medio de UseState
    // que seria como las variables de react
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        // uso de API feth
        // peticion a un servidro o sea al backend
        // fetch es asincrono
        async function fetchData() {
            // await hace referencia a que la funcion es asincrona
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`
            );
            // convertimos el response a json
            const data = await response.json();
            setLoading(false)
            // guardamos dentro el obketo setcharacters el arrlego de resultado de data
            setCharacters(data.results)
        }
        fetchData();
    }, [page])


    return (
        <div className='container'>

            <NavPage page={page} setPage={setPage}/>

            {loading ? (<h1>Loading...</h1>
            ) : (
                <div className='row'>
                    {characters.map((character) => {
                        return (
                            <div className='col-md-4' key={character.id}>
                                <Character character={character} />
                            </div>
                        );
                    })}
                </div>
            )}
            <NavPage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterList