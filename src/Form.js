const Form = ({input, setInput, handleSubmit}) => {    
    return (
        <div>
            <form className = "form" onSubmit={handleSubmit}>
                <label>What would you like to add?
                    <input className = "input"
                    type = "text"
                    value = {input}
                    onChange = {(event) => setInput(event.target.value)}/>
                </label>
                <button disabled = {!input} id = "submitButton" type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;

