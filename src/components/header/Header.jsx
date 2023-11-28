import styles from "./header.module.css";
import Navbar from "../navbar/Navbar";
import Hero from "./hero/Hero";

const Header = () =>
{
    return (
        <section id="home" className={styles.Header}>
            <Navbar />
            <Hero />
        </section>
    )
}

export default Header;