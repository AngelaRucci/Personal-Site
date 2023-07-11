import { PropsWithChildren } from 'react';
import styles from './index.module.scss';

export default function VisuallyHidden({children}: PropsWithChildren<{}>){
    
    return (
        <span className={styles.visuallyHidden}>{children}</span>
    );
}