import React from 'react';
import styles from './Heading.module.css'

function Heading({level, text}) {
    if (level === 'h1') {
        return( <h1 className={styles['site-title']}>{text}</h1>)
    }
    if (level === 'h2') {
        return( <h2 className={styles['block-title']}>{text}</h2>)
    }
}

Heading.defaultProps = {
    level: "h2", 
    text: "Кнопка"
}

export default Heading