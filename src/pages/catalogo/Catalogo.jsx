import { useEffect, useState } from "react"
import FilmeCard from "../../components/filmeCard/FilmeCard"
import style from "./catalogo.module.css"
import { Link } from "react-router-dom"

function Catalogo() {
    const [filmes, setFilmes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [paginaAtual, setPaginaAtual] = useState(1)

    function buscarMaisFilmes() {
        setPaginaAtual((atual) => atual + 1)
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQxZTA4YWM4NjkyZjgzY2EzOTRhZTFhOTdjYmRmNiIsIm5iZiI6MTc1MDYyNzI1MS44MzM5OTk5LCJzdWIiOiI2ODU4NzNiMzg4MWMzZmM2MDI0YmQyOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eGCQnNFSbj86NKAUZd8t2GoOizmiSsZpy18342MsfcM'}
        };

        fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${paginaAtual}`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFilmes(data.results)
        })
        .catch(err => console.error(err))
        .finally(() => setCarregando(false));
    }, [paginaAtual])

  

    if (carregando) {
        return <p>Carregando filmes...</p>
    }

    return (
        <>
        <div className={style.catalogoContainer}>

        {filmes.map(filme => (
            <div key={filme.id}>
                <Link to={`/filme/${filme.id}`}>
                    <FilmeCard filme={filme}></FilmeCard>
                </Link>
            </div>
        ))}

        <div className="button-container">
            
        </div>
        </div>
        </>
    )
}

export default Catalogo