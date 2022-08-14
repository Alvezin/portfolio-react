import { LogoFacebook, LogoInstagram, LogoGithub, LogoLinkedin, LogoWhatsapp } from "react-ionicons";
import "./externalLinks.css"
function ExternalLinks(){
    const logoWidth = "20px";
    const initialColor = "white"
    return (
        <aside>
            <ul className="social">
                <li>
                    <a className="logos" target="_blank" href="https://www.linkedin.com/in/gabriel-alves-dos-santos-120a74173/">
                        <LogoLinkedin
                            color={ initialColor }
                            height={ logoWidth }
                            width={ logoWidth }
                        />
                    </a>
                </li>
                <li>
                    <a className="logos" target="_blank" href="https://github.com/Alvezin">
                        <LogoGithub
                            color={ initialColor }
                            height={ logoWidth }
                            width={ logoWidth }
                        />
                    </a>
                </li>
                <li>
                    <a className="logos" target="_blank" href="https://www.facebook.com/Gansts123">
                        <LogoFacebook
                            color={ initialColor }
                            height={ logoWidth }
                            width={ logoWidth }
                        />
                    </a>
                </li>
                <li>
                    <a className="logos" target="_blank" href="https://www.instagram.com/_alvezin/">
                        <LogoInstagram
                            color={ initialColor }
                            height={ logoWidth }
                            width={ logoWidth }
                        />
                    </a>
                </li>
                <li>
                    <a className="logos" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=5515996836966&text=Olá, podemos conversar?">
                        <LogoWhatsapp
                            color={ initialColor }
                            height={ logoWidth }
                            width={ logoWidth }
                        />
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default ExternalLinks;