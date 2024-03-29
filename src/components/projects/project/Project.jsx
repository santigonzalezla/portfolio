import style from "../projects.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Project = ({ project }) =>
{
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const handleClick = () =>
    {
        window.open(project.link);
    }

    return (
        <section key={project.id} className={style.ProjectBanner}>
            <div className={style.ProjectImage} ref={ref}>
                <img src={project.image} alt="project" onClick={handleClick}/>
            </div>
            <motion.div className={style.ProjectText} style={{ y }}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <button onClick={handleClick}>See More</button>
            </motion.div>
        </section>
    );
}

export default Project;