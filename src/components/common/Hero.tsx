import Background from "./Shader/ShaderObject";

import styles from './hero.module.scss';

export default function Hero(){
    
    return (
        <div className={styles.hero}>
             <section>
                <hgroup>
                    <h1>Bring your digital dreams to life.</h1>
                    <p role="doc-subtitle">Creative solutions for every budget.</p>
                </hgroup>
                <button>Get in touch</button>
           </section>
            <span className={styles.background}><Background /></span>
        </div> ); 

}