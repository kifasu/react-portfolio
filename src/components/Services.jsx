import React from 'react'
import { motion } from 'framer-motion';

import {FaPython, FaAdobe, FaBootstrap} from 'react-icons/fa'
import {SiMicrosoftoffice, SiGoogleanalytics} from 'react-icons/si';
import {IoLogoCss3} from 'react-icons/io';
import {DiJavascript1} from 'react-icons/di';
import {AiFillHtml5} from 'react-icons/ai';


function Services() {
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
        <div className="services-skills">
            <div className="services">
                <div className="s-line"><h1>services</h1></div>
                <div className="svs">
                    <div className="service-card">
                        <p>psd to <br/>html & css</p>
                    </div>
                    <div className="service-card">
                        <p>static website <br/> wordpress <br/> single page app </p>
                    </div>
                    <div className="service-card">
                        <p>statistical data analysis</p>
                    </div>
                    <div className="service-card">
                        <p>gene expression analysis</p>
                    </div>
                    <div className="service-card">
                        <p>proofread</p>
                    </div>
                </div>    
                    
            </div>
            <div className="skills">
                <div className="s-line"><h1>comfy zone</h1></div>
                <div className="svs">
                    <div className="skill-card">
                        <FaPython/>
                        <p>python</p>
                    </div>
                    <div className="skill-card">
                        <DiJavascript1/>
                        <p>javascript</p>
                    </div>
                    <div className="skill-card">
                        <AiFillHtml5/>
                        <p>html</p>
                    </div>
                    <div className="skill-card">
                        <IoLogoCss3/>
                        <p>css</p>
                    </div>
                    <div className="skill-card">
                        <FaBootstrap/>
                        <p>bootsrap</p>
                    </div>
                    <div className="skill-card">
                        <SiMicrosoftoffice/>
                        <p>ms office</p>
                    </div>
                    <div className="skill-card">
                        <SiGoogleanalytics/>
                        <p>spss</p>
                    </div>
                    <div className="skill-card">
                        <FaAdobe/>
                        <p>adobe ps/xd</p>
                    </div>
                </div>    
                    
            </div>
        </div>
        </motion.div>
    )
}

export default Services
