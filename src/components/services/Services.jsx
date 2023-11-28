import style from "./services.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () =>
{
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"});

    const variants = {
        initial: {
            opacity: 0,
            x: -500,
            y: 100
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
    }

    return (
        <motion.section
            id="services"
            className={style.Services}
            variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}
        >
            <motion.div className={style.TextContainer}>
                <p>
                    I´m looking forward to help you improve <br/> your business and make it grow.
                </p>
                <hr />
            </motion.div>
            <motion.div
                variants={variants}
                className={style.TitleContainer}
            >
                <motion.div
                    className={style.Title}
                    variants={variants}
                >
                    <img src="https://raw.githubusercontent.com/safak/animated-portfolio/starter/public/people.webp" alt=""/>
                    <h1><motion.b whileHover={{ color: "#FFA500" }}>Unique</motion.b> Ideas</h1>
                </motion.div>
                <motion.div
                    className={style.Title}
                    variants={variants}
                >
                    <h1><motion.b whileHover={{ color: "#FFA500" }}>For your</motion.b> Business</h1>
                    <motion.button whileHover={{ scale: 1.05 }}>WHAT I DO?</motion.button>
                </motion.div>
            </motion.div>
            <motion.div className={style.ListContainer}>
                <motion.div
                    variants={variants}
                    className={style.ListCard}
                    whileHover={{ scale:1.1, marginLeft:"10px", marginRight:"10px", backgroundColor:"#111132", color:"#FFF", border:"1px solid #FFA500" }}
                >
                    <h2>Branding</h2>
                    <p>Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds.</p>
                    <button>Get in Touch</button>
                </motion.div>
                <motion.div
                    variants={variants}
                    className={style.ListCard}
                    whileHover={{ scale:1.1, marginLeft:"10px", marginRight:"10px", backgroundColor:"#111132", color:"#FFF", border:"1px solid #FFA500" }}
                >
                    <h2>Branding</h2>
                    <p>Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds.</p>
                    <button>Get in Touch</button>
                </motion.div>
                <motion.div
                    variants={variants}
                    className={style.ListCard}
                    whileHover={{ scale:1.1, marginLeft:"10px", marginRight:"10px", backgroundColor:"#111132", color:"#FFF", border:"1px solid #FFA500" }}
                >
                    <h2>Branding</h2>
                    <p>Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds.</p>
                    <button>Get in Touch</button>
                </motion.div>
                <motion.div
                    variants={variants}
                    className={style.ListCard}
                    whileHover={{ scale:1.1, marginLeft:"10px", marginRight:"10px", backgroundColor:"#111132", color:"#FFF", border:"1px solid #FFA500" }}
                >
                    <h2>Branding</h2>
                    <p>Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds.</p>
                    <button>Get in Touch</button>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Services;