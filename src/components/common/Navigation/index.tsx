import VisuallyHidden from '../../accessibility/VisuallyHidden';

import {ReactComponent as Logo} from '../../../svg/logo.svg';
import {ReactComponent as Menu} from '../../../svg/menu.svg';
import {ReactComponent as Close} from '../../../svg/close.svg';

import styles from './index.module.scss';
import { useState } from 'react';

export default function Navigation(){
    const [menuHidden, setMenuHidden] = useState(true);

    function handleMenuClick(){
        setMenuHidden((menu)=>!menu);
    }
    
    return (
        <header role='banner' className={menuHidden ? styles.header : `${styles.mobileMenuHeader} fade-in`}>
            <Logo className={styles.logo}/>

            <button className={styles.mobileMenu} onClick={handleMenuClick}>{menuHidden ? <Menu/> : <Close/>}</button>

            <nav role='navigation' aria-labelledby="main" hidden={menuHidden}>
                <VisuallyHidden><h2 id="mainmenulabel">Main Menu</h2></VisuallyHidden>
                <ul>
                    <li><VisuallyHidden>Current Page:</VisuallyHidden> <a href='/'>Home</a></li>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
                <button>Book a meeting</button>
            </nav>
        </header>
    );
}