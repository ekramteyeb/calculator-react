import React from 'react'


const Button = ({text, handleButton,namec}) => {
    return (
        <button id={namec} className='button' value={text} onClick={handleButton}>{text}</button>
    )
}

export default Button