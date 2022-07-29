import { useState } from "react"
import techList from "../data/techList"
import Modal from "../techModal/Modal"
import "./tech.css"
function Techs () {
    const [selectedTech, setSelectedTech] = useState("none")
    const [showModal, setShowModal] = useState(false)
    function selectTech (tech) {
        setSelectedTech(tech)
        setShowModal(true)
    }
    return (
        <section className="tech-section">
            <h2>Tecnologias</h2>
            <small>Clique na tech dejesada para saber mais</small>
            <div className="techs">
                {
                    techList.map(tech =>
                        <div className="tech-box" key={tech.id} onClick={()=>selectTech(tech)}>
                            <img alt={ tech.name } src={tech.img__path} className="tech-lib-img"/>    
                        </div>
                    )
                }
            </div>
            {showModal &&
                <aside>
                    <Modal 
                        selectedTech={selectedTech}
                        showModal={setShowModal}
                    />
                </aside>
            }
        </section>
    )
}

export default Techs