import "./projectcard.css"
function ProjectCard ({project}) {
    return(
        <div className="project-card">
            <img className="project_img" src={project.img__path} alt={ project.name } />
            <div className="hover-box">
                <div >
                    {
                        project.tech__list.map((el, index) => 
                            <small key={index}>{ el }</small>
                        )
                    }
                </div>
                <h3>{ project.name }</h3>
                <a target="_blank" href={project.repo__url}><small>Repository (recommended)</small></a>
                <a target="_blank" href={project.project__url}><small>Go to site</small></a>
            </div>
        </div>
    )
}
export default ProjectCard