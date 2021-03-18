import React from 'react';
import { motion } from 'framer-motion';

import Card from './Card';
import projectData from './projectData';

function Projects() {

    function createCard(projectData){
        return (
            <Card 
                key={projectData.id}
                title={projectData.title}
                desc={projectData.desc}
            />
        )
    }

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{
                delay: 1,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 0.6 }
                        }}
        >
        <div className="project-container">
            <div className="project-h1"><h1>recent works</h1></div>
            <div className="project-card">
                {projectData.map(createCard)}
            </div>     
        </div>
        </motion.div>
    )
}

export default Projects
