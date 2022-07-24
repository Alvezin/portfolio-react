import techList from "../data/techList"
import "./tech.css"
function Techs () {
    return (
        <section className="tech-section">
            <h2>Tecnologias</h2>
            <small>Clique na tech dejesada para saber mais</small>
            <div className="techs">
                {
                    techList.map(tech =>
                        <div className="tech-box" key={tech.id}>
                            <h3>{tech.name}</h3>
                            <img alt={ tech.name } src={tech.img__path} className="tech-lib-img"/>    
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Techs