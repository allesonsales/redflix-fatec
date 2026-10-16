import { useEffect, useState } from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {

const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const verificarTela = () => {
        setMobile(window.innerWidth < 768)
    }

    verificarTela()

    window.addEventListener('resize', verificarTela)

    return () => {
        window.removeEventListener('resize', verificarTela)
    }
}, [])

    return (
    <header className={style.header}>
        <nav>
        <img src="/logo.png" alt="" />
            <ul>
                <li>
                    <Link to="/">
                    <i class="fa-solid fa-house"></i>
                    {!mobile && <span>Home</span>}
                    </Link>
                    
                </li>
                <li>
                   <Link to="/catalogo">
                        <i class="fa-solid fa-film"></i>
                        {!mobile && <span>Catálogo</span>}
                   </Link>
     
                </li>
                <li>
                    <Link to="/favoritos">
                    <i class="fa-solid fa-heart"></i>
                    {!mobile && <span>Favoritos</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header