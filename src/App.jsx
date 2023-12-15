import React, { useState } from 'react';
import Heading from './components/Heading/Heading';
import Container from './components/Utils/Container/Container';
import ApplicationContainer from './components/Utils/Application Container/ApplicationContainer';
import Divider from './components/Divider/Divider';
function App() {
    return(
    <>
        <Container>
            <Heading
                level='h1'
                text='Приложение Блог'/>
            <Divider/>
            <ApplicationContainer/>
        </Container>
    </>
    )
}
export default App;