import React from 'react';
import styles from './Button.module.css'

function Button({type, text, onClick, styleClass}) {
    return(
        <button 
            // type={type} 
            onClick={onClick}
            className={styles[styleClass]}>{text}
        </button>
    )
}
Button.defaultProps = {
    // type: 'submit', 
    text: 'Опубликовать',
    onClick: () => {console.log("Отправлено")},
    styleClass: 'sumbit-btn'
}

export default Button