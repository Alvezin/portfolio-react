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
        <section className="tech-section" id="tech">
            <h2>Techs</h2>
            <div className="techs">
                {
                    techList.map(tech =>
                        <div className="tech-box" key={tech.id}>
                            <img alt={ tech.name } src={tech.img__path} className="tech-lib-img"/>    
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Techs