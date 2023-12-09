import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import woodFans from "./projectImages/Telemedicine.jpg"
import bewakoof from "./projectImages/Myntra.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [
    {
        img: woodFans,
        projectTitle: "Telemedicine",
        techStack: ["React", "Redux", "CSS", "Firebase", "RazorPay"],
        description: " Welcome to TeleMedicine, your premier destination for exquisite and sustainable medicine solutions that transform your living spaces into havens of comfort and healthy.",
        githubLink: "https://github.com/VimalrajVR12/TeleMedicine",
        appLink: "https://telemedicineonlinehealthcarepharmacy.netlify.app/"
    },
    {
        img: greenParadise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
        githubLink: "https://github.com/VimalrajVR12/TeleMedicine",
        appLink: "https://enchanting-klepon-de18e6.netlify.app/"
    },
    {
        img: bewakoof,
        projectTitle: "Myntra",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: "Myntra.com is an Indian e-commerce platform known for its trendy and quirky fashion, offering a wide range of casual clothing, accessories, and merchandise. it caters to individuals looking for unique and fun apparel choices.",
        githubLink: "https://github.com/SurajYadav007/gitCollab",
        appLink: " https://masai-myntra-fashion-clone.netlify.app/"
    }, {
        img: greenParadise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
        githubLink: "https://github.com/Coders6754/devilish-drop-2377?tab=readme-ov-file",
        appLink: "https://enchanting-klepon-de18e6.netlify.app/"
    }
]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects