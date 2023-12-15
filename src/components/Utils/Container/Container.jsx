import React, { useState } from 'react';
import styles from './Container.module.css'

function Container({children, styleClass}) {
    return(
    <div 
        className={styles[styleClass]}>{children}
    </div>)
}
Container.defaultProps = {
    styleClass: "container"
}

export default Container