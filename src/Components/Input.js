function input({ type, name, id, value }) {
    return (
        <>
         <input className="inputTextBox" type={type} name={name} id={id} value={value} />   
        </>
    )
}

export default input
