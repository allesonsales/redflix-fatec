import style from './card.module.css'

function FilmeCard({filme}) {
    return (
        <div className={style.cardContainer}>
            <h2>{filme.title}</h2>

            <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title}
            />
        </div>
    )
}

export default FilmeCard