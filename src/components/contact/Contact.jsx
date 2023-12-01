import style from './contact.module.css';
import { useState } from "react";
import { motion } from 'framer-motion';

const Contact = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
    }

    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.section id="contact" className={style.Contact} variants={variants} initial="initial" whileInView="animate">
            <motion.div className={style.ContactText} variants={variants}>
                <motion.h1 variants={variants}>Let´s work together</motion.h1>
                <motion.p variants={variants}>Have a project you´d like to discuss? I´d love to hear from you. Fill out the form and I´ll get back to you within 24 hours.</motion.p>
                <motion.div className={style.ContactInfo} variants={variants}>
                    <motion.h3 variants={variants}>Phone</motion.h3>
                    <motion.p variants={variants}>+57 317 431 9914</motion.p>
                </motion.div>
                <motion.div className={style.ContactInfo} variants={variants}>
                    <motion.h3 variants={variants}>Email</motion.h3>
                    <motion.p variants={variants}>santigonzalezla@gmail.com</motion.p>
                </motion.div>
                <motion.div className={style.ContactInfo} variants={variants}>
                    <motion.h3 variants={variants}>Address</motion.h3>
                    <motion.p variants={variants}>Bogotá, Colombia</motion.p>
                </motion.div>
            </motion.div>
            <motion.form className={style.ContactForm} variants={variants}>
                <motion.input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} variants={variants}/>
                <motion.input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} variants={variants}/>
                <motion.textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}  variants={variants}/>
                <motion.button type="submit" onClick={handleSubmit} variants={variants}>Send</motion.button>
            </motion.form>
        </motion.section>
    )
}

export default Contact;