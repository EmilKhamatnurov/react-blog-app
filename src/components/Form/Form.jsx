import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Input from '../Input/Input';
import Button from '../Button/Button';

function Form() {
    return(
        <>
            <Heading
                level='h2'
                text='Приложение блог'
                styleClass='site-title'/>
            <Input 
                type='input'
                text='Заголовок'/>
            <Input 
                type='textarea'
                text='Описание поста'/>
            <Button/>
        </>
    )
}
export default Form