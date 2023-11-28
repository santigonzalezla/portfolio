import styles from '../sidebar.module.css';
import { useState } from "react";

const Toggle = ({ setOpen }) =>
{
    const [menu, setMenu] = useState(true);

    const handleClick = () =>
    {
        setOpen((prev) => !prev);
        setMenu(!menu);
    }

    return (
        <div className={styles.Toggle}>
            <button onClick={handleClick}>
                {menu ? (
                    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0"/>
                        <path d="M4 12l16 0"/>
                        <path d="M4 18l16 0"/>
                    </svg>
                ):(
                    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 6l-12 12"/>
                        <path d="M6 6l12 12"/>
                    </svg>
                )}
            </button>
        </div>
    );
}


export default Toggle;