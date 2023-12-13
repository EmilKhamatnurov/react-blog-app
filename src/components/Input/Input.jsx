import React from 'react';
import styles from './Input.module.css'

function Input({type, text, onChange, value, name}) {
    if (type === "input") {
        return( 
            <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                name={name}
                placeholder={text} 
                className={styles['title-input']}/>
        )
    }
    if (type === "textarea") {
        return(
         <textarea 
            value={value} 
            onChange={onChange} 
            name={name}
            placeholder={text} 
            className={styles['description-input']}  
            cols="30" 
            rows="10"></textarea>
        )
    }
}

Input.defaultProps = {
    type: 'input', 
    text: 'Поле ввода', 
}

export default Input