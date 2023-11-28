import style from './hero.module.css';
import { motion } from "framer-motion";

const Hero = () =>
{
    const textVariants = {
        initial: {
            opacity: 0,
            x: -500
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0
        },
        animate: {
            x: "-230%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20
            }
        }
    }

    return (
        <div className={style.Hero}>
            <motion.div className={style.HeroText}
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <motion.h2 variants={textVariants}>SANTIAGO GONZALEZ</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI Designer</motion.h1>
                <motion.div className={style.HeroButtons} variants={textVariants}>
                    <motion.button variants={textVariants}>See my Latest Work</motion.button>
                    <motion.button variants={textVariants}>Get in Contact</motion.button>
                </motion.div>
                <motion.svg viewBox="0 0 91 113.75" x="0px" y="0px" width="65px" fill="#FFF" variants={textVariants} animate="scrollButton">
                    <path d="M53.61,67.71l-8.3,7.27-8.31-7.27c-.62-.55-1.57-.48-2.12,.14-.55,.62-.48,1.57,.14,2.12l9.29,8.13c.28,.25,.64,.37,.99,.37s.69-.13,.97-.36c0,0,.02,0,.02,0l9.29-8.13c.62-.55,.69-1.49,.14-2.12s-1.49-.69-2.12-.14Z"/>
                    <path d="M53.61,52.74l-8.3,7.27-8.31-7.27c-.62-.55-1.57-.48-2.12,.14-.55,.62-.48,1.57,.14,2.12l9.29,8.13c.28,.25,.64,.37,.99,.37s.69-.13,.97-.36c0,0,.02,0,.02,0l9.29-8.13c.62-.55,.69-1.49,.14-2.12-.55-.62-1.49-.69-2.12-.14Z"/>
                    <path d="M53.67,1.69h-16.74C24.74,1.69,14.83,11.6,14.83,23.78v43.96c0,12.18,9.91,22.09,22.09,22.09h16.74c12.18,0,22.09-9.91,22.09-22.09V23.78c0-12.18-9.91-22.09-22.09-22.09Zm19.09,66.05c0,10.53-8.57,19.09-19.09,19.09h-16.74c-10.53,0-19.09-8.56-19.09-19.09V23.78c0-10.53,8.57-19.09,19.09-19.09h16.74c10.53,0,19.09,8.56,19.09,19.09v43.96Z"/>
                    <path d="M45.3,40.14c4.47,0,8.11-3.64,8.11-8.11v-10.24c0-4.47-3.64-8.11-8.11-8.11s-8.11,3.64-8.11,8.11v10.24c0,4.47,3.64,8.11,8.11,8.11Zm-5.11-18.35c0-2.82,2.29-5.11,5.11-5.11s5.11,2.29,5.11,5.11v10.24c0,2.82-2.29,5.11-5.11,5.11s-5.11-2.29-5.11-5.11v-10.24Z"/>
                </motion.svg>
            </motion.div>
            <motion.div className={style.HeroSlider} variants={sliderVariants} initial="initial" animate="animate">
                Developer Engineer Designer
            </motion.div>
            <div className={style.HeroImg}>
                <img src="https://i.imgur.com/WQxM9aP.png" alt="profile"/>
            </div>
        </div>
    );
}

export default Hero;