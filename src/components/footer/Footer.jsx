import style from "./footer.module.css"

function Footer() {
    return (
        <footer className={style.footer}>
       
            <span>
                Alleson Sales
            </span>
            <span>
                2026
            </span>
            <div className={style.social}>
                <i class="fa-solid fa-at"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-whatsapp"></i>
            </div>
        </footer>
    )
}

export default Footer