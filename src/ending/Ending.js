import ExternalLinks from "../externalLinks/ExternalLinks"
import "./ending.css"
function Ending () {
    return(
        <div className="ending-box">
            <p>
                É isso! Espero que algo aqui tenha chamado sua atenção, e, se por acaso quiser entrar em contato 🥺, pode me encontrar pelos seguintes meios:
            </p>
            <div className="links-box">
                <ExternalLinks />
            </div>
        </div>
    )
}

export default Ending