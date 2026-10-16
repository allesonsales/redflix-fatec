import { useEffect, useState } from "react"
import style from './hero.module.css'
import { Link } from "react-router-dom"

function Hero() {
    const [filmes,setFilmes] = useState([])
    const [indice, setIndice] = useState(0)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQxZTA4YWM4NjkyZjgzY2EzOTRhZTFhOTdjYmRmNiIsIm5iZiI6MTc1MDYyNzI1MS44MzM5OTk5LCJzdWIiOiI2ODU4NzNiMzg4MWMzZmM2MDI0YmQyOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eGCQnNFSbj86NKAUZd8t2GoOizmiSsZpy18342MsfcM'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
        .then(res =>  res.json())
        .then(data =>{
            setFilmes(data.results)
            console.log(data)
        } )
        .catch(err => console.error(err));
    }, [])

    function proximoFilme() {
       setIndice(indice + 1)
    }

     function filmeAnterior() {
       setIndice(indice - 1)
    }

    const filmeAtual = filmes[indice]

    return (
        <section className={style.hero}>
            <button onClick={filmeAnterior} disabled={indice === 0}>
                <i class="fa-solid fa-circle-chevron-left"></i>
            </button>
            {filmeAtual ? (
            
                      <div key={filmeAtual.id} className={style.filmeContainer}>
                        <img  src={`https://image.tmdb.org/t/p/w500${filmeAtual.backdrop_path}`} alt={filmeAtual.title} />
                        <div className={style.conteudoContainer}>
                            <h1>{filmeAtual.title}</h1>
                            <p>{filmeAtual.overview}</p>
                            <div className={style.buttonContainer}>
                                <button>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <span>Assistir</span>
                                </button>
                                <Link to={`/filme/${filmeAtual.id}`}>
                                
                                <button className={style.informacoes}>
                                    <span>Mais informações</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>  
    
                ) : (
                    <p>Carregando filme...</p>
                )}
            <button onClick={proximoFilme}>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
        </section>
    )
}

export default Hero