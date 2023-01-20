import "./projectBox.css"
import {projectList, backEndProjectList} from "../data/projectList";
import ProjectCard from "../projectcard/ProjectCard";
function ProjectBox () {
    return(
        <section className="project-section" id="project">
            <h2>Projects</h2>
            <div className="project-div">
                {
                    projectList.map((project) => 
                        <ProjectCard project={project} />
                    )
                }
            </div>
            <div className="project-div">
                {
                    backEndProjectList.map((el, index) => (
                        <div key={index} className="project-card">
                            <img className="project_img" src={el.img__path} alt="" />
                            <div className="hover-box">
                                <div >
                                    {
                                        el.tech__list.map((el, index) => 
                                            <small key={index}>{ el }</small>
                                        )
                                    }
                                    {
                                        el.aditional__path.map((el,index) => (
                                            <img style={{width: '30px'}} key={index} src={el} alt="" />
                                        ))
                                    }
                                </div>
                                <h3>{ el.name }</h3>
                                <a target="_blank" href={el.repo__url}><small>Repository</small></a>
                            </div>
                        </div>
                    ))

                }
            </div>
        </section>
    )
}

export default ProjectBox;