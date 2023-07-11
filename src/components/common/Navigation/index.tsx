import VisuallyHidden from '../../accessibility/VisuallyHidden';
import styles from './index.module.scss';

export default function Navigation(){
    
    return (
        <header role='banner' className={styles.header}>
            <h2>Image of logo</h2>
            <nav role='navigation' aria-labelledby="main">
                <VisuallyHidden><h2 id="mainmenulabel">Main Menu</h2></VisuallyHidden>
                <ul>
                    <li><VisuallyHidden>Current Page:</VisuallyHidden> <a href='/'>Home</a></li>
                    <li><a href='/'>Page 2</a></li>
                    <li><a href='/'>Page 3</a></li>
                </ul>
            </nav>
        </header>
    );
}