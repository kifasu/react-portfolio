import React from 'react'
import { motion } from 'framer-motion';

import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
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
        <div className="about-contact">
            <>
            </>
            <div className="about">
                <div className="about-line"><h1>about me</h1></div><br/>
                <h3 className="abt-content">Hi, I am Aqmal. </h3><br/>
                <p className="abt-p">I'm a graduate of the local university in Malaysia. Being a science major, I know how to do most biotech-related stuff like gene extraction, statistical data analysis, plant pathology lab work and some on pineapple optimisation. Though I understand these kinds of things at a surface-level and by no necessary means an expert yet, I'm pretty confident in my skills to learn and get the job done. 
<br/><br/>
Recently, I found a book that changed the way I have been learning things. TLDR; that book has fair points on why I don't need to limit myself to one thing. What you know today do not necessarily determine what you want to be in the future. Sounds dramatic but it's true. Since then, I get excited about learning new technologies and do what I enjoy the best.
</p>
            </div>
            <div className="contact">
                <div className="ctc-line"><h1 >contact me </h1></div><br/>
                <h4 className="ctc-content">
                Feel free to hit me up if you are interested in working together for any cool project by 
                sending me an email or whatsapp. Click on the links if you are lazy like me &#128516; <br/><br/> </h4>
                <p><br/>Expect my replies within 96/2 hours. Under the circumstances you do not get an immediate answer from me, I might be in the middle of nowhere, but I promise you I will get back to you asap </p>
                <p><br/><br/>
                <div className="lol">
                    <p>
                        <a className="react-ico" href="https://mail.google.com/mail/?extsrc=mailto&url=mailto:aqmlmnsr@gmail.com"><AiOutlineMail/></a> 
                        &nbsp;   aqmlmnsr@gmail.com<br/>
                    </p>
                    <p>
                        <a className="react-ico" href="https://wa.link/bq35ta">
                         <FaWhatsapp/>
                        </a> &nbsp;  +012 222 6532     
                    </p>
                </div>
                

               </p>
            </div>
        </div>
        </motion.div>
    )
}

export default Contact
