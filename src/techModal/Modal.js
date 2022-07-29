import "./modal.css"

function Modal ({selectedTech, showModal}) {
    return (
        <div className="modalView">
            <div className="modalBox">
                <div className="modalButtonBox">
                    <button className="Modalbutton" onClick={() => showModal(false)}>X</button>
                </div>
                <div className="modalInfoBox">
                    <h1> { selectedTech.name } </h1>
                    <img className="modal-img" src={selectedTech.img__path} alt={selectedTech.name} />
                    <p>{ selectedTech.description }</p>
                </div>
                {
                    selectedTech.libs &&
                    <div className="libs">
                        <h3>Bibliotecas</h3>
                        <div className="libsBox">
                            {
                                selectedTech.libs.map((item)=>
                                    <abbr title={item.name}>
                                        <img className="libs-img" src={item.img__path} alt="" />
                                    </abbr>
                                )
                            }
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}
export default Modal