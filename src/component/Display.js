import React from 'react'

const style = {
    width: '100%',
    height: '16vh',
    backgroundColor: '#858694',
    color: '#FFFFFF',
    textAlign:'right',
    fontSize: '80px',
    marginRight:'10px'
    
    
    
}
const Display = ({ text}) => {
    return (
        <div style={style}>{text}</div>
    )
}

export default Display