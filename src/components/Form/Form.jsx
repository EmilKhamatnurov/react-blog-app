import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.css'

function Form() {
    return(
        <form className={styles['form-container']}>
            <Heading
                level='h2'
                text='Новый пост'/>
            <Input 
                type='input'
                text='Заголовок'/>
            <Input 
                type='textarea'
                text='Описание поста'/>
            <Button
                type='submit'
                text='Отправить'/>
        </form>
    )
}
export default Form