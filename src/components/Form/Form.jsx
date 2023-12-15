import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.css'

function Form({onAppBtnClick}) {
    const [form, setForm] = useState({
        title: '',
        description: '',
    });
    function changeForm(element) {
        const {name, value} = element;
        setForm({
            ...form, 
            [name]: value
        })
    }
    function isEmptyForm() {
        console.log(Boolean(form.title), Boolean(form.description));
        return Boolean(form.title) && Boolean(form.description)
    }
    return(
        <form className={styles['form-container']}>
            <Heading
                level='h2'
                text='Новый пост'/>
            <Input 
                type='input'
                text='Заголовок'
                name='title'
                value={form.title}
                onChange={(e) => changeForm(e.target)}/>
            <Input 
                type='textarea'
                text='Описание поста'
                name='description'
                value={form.description}
                onChange={(e) => changeForm(e.target)}/>
            <Button
                type='submit'
                text='Отправить'
                isDisabled={!isEmptyForm()}
                onClick={(e) => {
                    e.preventDefault()
                    onAppBtnClick(form)
                    }}/>
        </form>
    )
}
export default Form