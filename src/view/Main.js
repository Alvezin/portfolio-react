import About from "../about/About";
import Techs from "../techs/Techs";
import XpCard from "../xp/xpCard";
import ProjectBox from "../projects/ProjectBox";
import Ending from "../ending/Ending";
import "./main.css"
function Main () {
    return (
        <section className="main">
            <About />
            <XpCard />
            <Techs />
            <ProjectBox />
            <Ending />
        </section>
    )
}

export default Main;