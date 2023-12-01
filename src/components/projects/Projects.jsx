import style from './projects.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Project from "./project/Project";

const Projects = () =>
{
    const projects = [
        {
            id: 1,
            name: "Pharmaceutical Ecommerce Website",
            description: "We created a fully functional ecommerce website for a pharmaceutical company, Romera Market Farma. It includes a highly operational shopping cart, a payment gateway and a user-friendly interface.",
            image: "https://i.imgur.com/xnezSwO.jpg",
            link: "https://romeramarketfarma.com",
        },
        {
            id: 2,
            name: "Macondo Softwares Landing Page",
            description: "Designer and developer of the landing page for a software company, Macondo Softwares. Even the software companies come to me to create their websites.",
            image: "https://i.imgur.com/jHV20eh.jpg",
            link: "https://macondolanding.vercel.app"
        },
        {
            id: 3,
            name: "Sweet Dreams Landing Page",
            description: "Creator of the landing page for a pijamas company, Sweet Dreams. It combines a modern design with a minimalist style according to the company's needs and the target audience.",
            image: "https://i.imgur.com/EP0iCLa.jpg",
            link: "https://sweetdreams-vert.vercel.app"
        },
        {
            id: 4,
            name: "Nova GL Web Agency",
            description: "Founder and CEO of Nova GL Web Agency. We are a team of developers and designers who work together to create amazing websites and applications. We are passionate about our work and we love what we do.",
            image: "https://i.imgur.com/ffHBSq3.jpg",
            link: "https://novagl-6t6y.vercel.app"
        },
    ]

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div id="projects" className={style.Project} ref={ref}>
            <div className={style.Progress}>
                <h1>Featured Work</h1>
                <motion.div style={{ scaleX }} className={style.ProgressBar}></motion.div>
            </div>
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    )
}

export default Projects;