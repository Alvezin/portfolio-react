import About from "../about/About";
import Techs from "../techs/Techs";
import ProjectBox from "../projects/ProjectBox";
import "./main.css"
function Main () {
    return (
        <section className="main">
            <About />
            <Techs />
            <ProjectBox />
        </section>
    )
}

export default Main;