import styles from "./navbar.module.css";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () =>
{
    return (
        <nav className={styles.Nav}>
            <Sidebar />
            <div className={styles.Container}>
                <motion.h1
                    initial={{ opacity:0, scale:0.5 }}
                    animate={{ opacity:1, scale: 1 }}
                    transition={{ duration:0.5 }}
                >
                    SGLA
                </motion.h1>
                <div className={styles.Social}>
                    <a href="https://www.instagram.com/sgla.society/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                            <path d="M16.5 7.5l0 .01"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/sgla_society" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="icon icon-tabler icon-tabler-brand-twitter-filled" width="24" height="24"
                             viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                                strokeWidth="0" fill="currentColor"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCn1p3Z3G5y2Y5g2Y3Mf9Y1g" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="icon icon-tabler icon-tabler-brand-youtube-filled" width="24" height="24"
                             viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                                strokeWidth="0" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;