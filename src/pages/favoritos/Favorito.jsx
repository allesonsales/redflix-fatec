import { useState } from "react"
import FilmeCard from "../../components/filmeCard/FilmeCard"
import { Link } from "react-router-dom"
import style from "./favorito.module.css"


function Favoritos() {
    const [favoritos] = useState(() => {
        return JSON.parse(localStorage.getItem("favoritos")) || []
    })

    if (favoritos.length < 1) {
        return (
            <div className={style.vazio}>
                <p>Você não tem uma lista de favoritos...</p>
            </div>
        )
    }

    return (
         <>
            <div className={style.catalogoContainer}>
                {favoritos.map(favorito => (
                    <div key={favorito.id}>
                        <Link to={`/filme/${favorito.id}`}>
                            <FilmeCard filme={favorito}></FilmeCard>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )

}

export default Favoritos