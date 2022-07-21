import "./header.css"
import Menu from "../menu/Menu";
import ExternalLinks from "../externalLinks/ExternalLinks"
import Presentation from "../presentation/Presentation";
function Header(){

    return (
        <header className="header">
            <div className="menu">
                <h4>Gabriel Alves</h4>
                <Menu />
            </div>
            <div className="externalLinks">
                <ExternalLinks />
            </div>
            <div className="central-box">
                <Presentation />
                <img src="../../image/simbol.svg" alt="" />
            </div>
        </header>
    )
}

export default Header;