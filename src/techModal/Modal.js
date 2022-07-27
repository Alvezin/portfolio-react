import "./modal.css"

function Modal ({selectedTech, showModal}) {
    return (
        <div className="modalView">
            <div className="modalBox">
                <button onClick={() => showModal(false)}>X</button>
                <h1> { selectedTech.name } </h1>
                <img src={selectedTech.img__path} alt={selectedTech.name} />
            </div>
        </div>
    )
}
export default Modal