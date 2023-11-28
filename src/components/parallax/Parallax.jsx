import style from "./parallax.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) =>
{
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBack = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            className={style.Parallax}
            ref={ref}
            style={{
                background:
                    type === "services"
                    ? "linear-gradient(180deg, #111132, #0C0C1D)"
                    : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "services" ? "What I Do" : "What I Did"}
            </motion.h1>
            <motion.div className={style.Mountains}></motion.div>
            <motion.div
                className={style.Planets}
                style={{
                    y: yBack,
                    backgroundImage:
                        `url(${type === "services" ? "https://i.imgur.com/iHb2mHE.png" : "https://i.imgur.com/N2p8fjQ.png"})`
                }}
            >
            </motion.div>
            <motion.div style={{ x: yBack }} className={style.Stars}></motion.div>
        </section>
    );
}

export default Parallax;