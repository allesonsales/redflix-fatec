import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import style from "./filme.module.css"

function Filme () {
    const [carregando, setCarregando] = useState(true)
    const [filme, setFilme]= useState(null)
    const [favoritos, setFavoritos] = useState(() => {
        return JSON.parse(localStorage.getItem("favoritos")) || []
    })

    const { id }= useParams()

    const favorito = favoritos.some(item => item.id === filme?.id)

    function guardarFilmeFavorito() {
        const novoFavoritos = favorito 
        ? favoritos.filter((favorito) => favorito.id !== filme.id)
        : [...favoritos, filme]

        setFavoritos(novoFavoritos)

        localStorage.setItem("favoritos", JSON.stringify(novoFavoritos))
    }

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQxZTA4YWM4NjkyZjgzY2EzOTRhZTFhOTdjYmRmNiIsIm5iZiI6MTc1MDYyNzI1MS44MzM5OTk5LCJzdWIiOiI2ODU4NzNiMzg4MWMzZmM2MDI0YmQyOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eGCQnNFSbj86NKAUZd8t2GoOizmiSsZpy18342MsfcM'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFilme(data)
        })
        .catch(err => console.error(err))
        .finally(() => setCarregando(false))
    }, [])

    if(carregando) {
        return (
            <p>Carregando filme...</p>
        )
    }

    return (
        <div className={style.filmeContainer}>
            <img src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`} alt="" />
            <div className={style.conteudoContainer}>

                <div className={style.leftContainer}>
                    <div className={style.generos}>
                        {filme.genres && filme.genres.map(genero => (
                            <small key={genero.id}>{genero.name}</small>
                        ))}
                    </div>
                    <h1>{filme.title}</h1>
                    <div className={style.descricaoContainer}>
                        <p>{filme.overview}</p>
                        <button onClick={guardarFilmeFavorito}>
                            {favorito  ? (
                                <i class="fa-solid fa-heart"></i>
                            ) : (
                                <i class="fa-regular fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filme