import React, { useState } from 'react';

function Container(props) {
    return(<div className='container'>{props.child}</div>)
}
export default Container