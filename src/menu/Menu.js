import "./menu.css"
function Menu () {

    return(
        <nav>
            <ul className="menuList">
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#tech">Tecnologias</a></li>
                <li><a href="#project">Projetos</a></li>
            </ul>
        </nav>
    )
}

export default Menu