import React, { useState } from 'react';
import styles from './Container.module.css'

function Container({children, styleClass}) {
    const containerStyles = styleClass.map(className => styles[className]);
    return(
    <div 
        className={containerStyles}>{children}
    </div>)
}
Container.defaultProps = {
    styleClass: "container"
}

export default Container