import React, { useState } from 'react';
import Form from './components/Form/Form';
import Heading from './components/Heading/Heading';
import Container from './components/Utils/Container/Container';
import PostFeed from './components/PostFeed/PostFeed';

function App() {
    return(
    <>
        <Container>
            <Heading
                level='h1'
                text='Приложение Блог'/>
            <Container styleClass={'flex-container-row'}>
                <Form/>
                <Container styleClass='flex-container-column'>
                    <PostFeed/>
                </Container>
            </Container>
        </Container>
    </>
    )
}
export default App;