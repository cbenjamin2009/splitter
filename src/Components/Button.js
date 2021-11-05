import { useState } from 'react'

function Button({name, value, classStyle}) {
    const [buttonValue, setButtonValue] = useState('')

    const handleClick = (newValue) => {
        setButtonValue(newValue)
        console.log('button state = ' + buttonValue)
    }

    return (
        <button onChange={() => handleClick({value})} name={name} className={classStyle}> {value}
            
        </button>
    )
}

export default Button
