import React from 'react'

export const Skills = () => {
    const skillsArr = [
        {
            title: "HTML",
            years: 4
        }, {
            title: "CSS",
            years: 4
        }, {
            title: "Javascript",
            years: 4
        }, {
            title: "Accessibility",
            years: 4
        }, {
            title: "React",
            years: 3
        }, {
            title: "SASS",
            years: 3
        }
    ]
    return (
        <div className="skills">
            {skillsArr.map(skill => {
                return (
                    <div className="skill">
                        <h2 className="skill__title">{skill.title}</h2>
                        <p className="skill__experience">{skill.years} years Experience</p>
                    </div>)
            })}
        </div>
    )
}
