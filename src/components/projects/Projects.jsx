import style from './projects.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Project from "./project/Project";

const Projects = () =>
{
    const projects = [
        {
            id: 1,
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149477719.jpg?w=1060&t=st=1701189682~exp=1701190282~hmac=ac3935a04de13af3ef4f14fbce5cc28cdfb0fac838648d20bc3b9b563bb6b4f3",
        },
        {
            id: 2,
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://img.freepik.com/free-vector/landing-page-with-laptop_52683-28586.jpg?w=1060&t=st=1701189688~exp=1701190288~hmac=40025889f88bb4000d929c1832f264cc0003a27c077b10944600fd28662bee11",
        },
        {
            id: 3,
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg?w=1380&t=st=1701189732~exp=1701190332~hmac=b2f63b9c89e8928e5e8ed51c02053155367624cded4296ec5293112e85b8cd70",
        },
        {
            id: 4,
            name: "Project 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://img.freepik.com/free-psd/minimalist-scrapbook-web-design-template_23-2149197312.jpg?w=1380&t=st=1701189701~exp=1701190301~hmac=095c6c7e78710a07e347795329ebe5bd2e8c125d5c0bbaf6a1ac33d1df886692",
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