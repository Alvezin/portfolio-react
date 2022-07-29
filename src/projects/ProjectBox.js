import "./projectBox.css"
import projectList from "../data/projectList";
import ProjectCard from "../projectcard/ProjectCard";
function ProjectBox () {
    return(
        <section className="project-section">
            <h2>Projetos</h2>
            <div className="project-div">
                {
                    projectList.map((project) => 
                        <ProjectCard project={project} />
                    )
                }
            </div>
        </section>
    )
}

export default ProjectBox;