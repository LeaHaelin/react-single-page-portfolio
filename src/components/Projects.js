import React from 'react'
import imageSDP from "../assets/images/thumbnail-project-1-small.webp";
import imageLDP from "../assets/images/thumbnail-project-1-large.webp";
import imageSELanding from "../assets/images/thumbnail-project-2-small.webp";
import imageLELanding from "../assets/images/thumbnail-project-2-large.webp";
import imageSTodo from "../assets/images/thumbnail-project-3-small.webp";
import imageLTodo from "../assets/images/thumbnail-project-3-large.webp";
import imageSEnter from "../assets/images/thumbnail-project-4-small.webp";
import imageLEnter from "../assets/images/thumbnail-project-4-large.webp";
import imageSMemory from "../assets/images/thumbnail-project-5-small.webp";
import imageLMemory from "../assets/images/thumbnail-project-5-large.webp";
import imageSArt from "../assets/images/thumbnail-project-6-small.webp";
import imageLArt from "../assets/images/thumbnail-project-6-large.webp";

export const Projects = () => {
    const projectsArr = [
        {
            imageS: imageSDP,
            imageL: imageLDP,
            title: "DESIGN PORTFOLIO",
            skill: ["HTML ", "CSS"],
            projectUrl: "",
            codeUrl: ""
        }, {
            imageS: imageSELanding,
            imageL: imageLELanding,
            title: "E-LEARNING LANDING PAGE",
            skill: ["HTML ", "CSS"],
            projectUrl: "",
            codeUrl: ""
        }, {
            imageS: imageSTodo,
            imageL: imageLTodo,
            title: "TODO WEB APP",
            skill: ["HTML ", "CSS ", "JAVASCRIPT"],
            projectUrl: "",
            codeUrl: ""
        }, {
            imageS: imageSEnter,
            imageL: imageLEnter,
            title: "ENTERTAINMENT WEB APP",
            skill: ["HTML ", "CSS ", "JAVASCRIPT"],
            projectUrl: "",
            codeUrl: ""
        }, {
            imageS: imageSMemory,
            imageL: imageLMemory,
            title: "MEMORY GAME",
            skill: ["HTML ", "CSS ", "JAVASCRIPT"],
            projectUrl: "",
            codeUrl: ""
        }, {
            imageS: imageSArt,
            imageL: imageLArt,
            title: "ART GALLERY SHOWCASE",
            skill: ["HTML ", "CSS ", "JAVASCRIPT"],
            projectUrl: "",
            codeUrl: ""
        },
    ]
    return (
        <div className="projects">
            <div className="projects__header">
                <h2 className="projects__title">Projects</h2>
                <button className="projects__contact contact-me">contact me</button>
            </div>
            <div className="project-contents">
                {projectsArr.map(project => {
                    return (
                        <div className="project">
                            <picture>
                                <source media="(min-width: 1400px)" srcset={project.imageL} />
                                <img className='project__thumbnail' src={project.imageS} alt={project.title} />
                            </picture>
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__skill">{project.skill} </p>
                            <div className="project__urls">
                                <a className='project__url view-site' href="/">view portfolio</a>
                                <a className='project__url view-code' href="/">view code</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
