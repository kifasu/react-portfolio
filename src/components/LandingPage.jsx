import React,{ useEffect }  from 'react';
import { motion, useCycle } from 'framer-motion';

import dp from "../dp.png"

function LandingPage() {

    const imageVar = {
        animationOne: { opacity: 1, transition: { duration: 2 } },
        animationTwo: {
          y: [0, -20],
          opacity: 1,
          transition: { yoyo: Infinity, ease: "easeIn" }
        }
      };
      
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
      
    useEffect(() => {
        setTimeout(() => {
        cycleAnimation();
        }, 300);
    }, []);

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{
                delay: 1,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 0.8 }
                        }}
        >
        <div className="lp">
            <div>
                <motion.div
                    variants={imageVar}
                    animate={animation}>
                    <img className="profile-pic" src={dp} alt="aqmxl"/>
                </motion.div>
                
            </div>
            <div classname="name-sub">
                <h1><div className="name">aqmal mansor</div></h1>
                <div className="lp-sub"><h4>coffee connoisseur</h4></div>
            </div>
        </div>
        </motion.div>
    )
}

export default LandingPage;
