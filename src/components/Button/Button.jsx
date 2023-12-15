import React from 'react';
import styles from './Button.module.css'

function Button({text, onClick, styleClass, isDisabled}) {
    return(
        <button 
            disabled={isDisabled}
            onClick={onClick}
            className={styles[styleClass]}>{text}
        </button>
    )
}
Button.defaultProps = {
    isDisabled: false,
    text: 'Опубликовать',
    onClick: () => {console.log("Отправлено")},
    styleClass: 'sumbit-btn'
}

export default Button