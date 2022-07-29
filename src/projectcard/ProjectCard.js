import "./projectcard.css"
function ProjectCard ({project}) {
    return(
        <div className="project-card">
            <img className="project_img" src={project.img__path} alt={ project.name } />
            <div className="hover-box">
                <h3>{ project.name }</h3>
                <a target="_blank" href={project.repo__url}><small>Repositório (recomendado)</small></a>
                <a target="_blank" href={project.project__url}><small>Acessar</small></a>
            </div>
        </div>
    )
}
export default ProjectCard