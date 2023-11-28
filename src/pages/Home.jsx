import './home.css';
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Parallax from "../components/parallax/Parallax";

const Home = () =>
{
    return (
        <>
            <Header />
            <Parallax type={"services"}/>
            <Services />
            <Parallax type={"projects"} />
            <Projects />
            <Contact />
        </>
    )
}

export default Home;