const Input = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.title.value;
        console.log(text);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type = 'text' name='title'/>
            <textarea type = 'text' name='description'/>
            <input type = 'date' name='date'/>
            <input type = 'text' name='priority'/>
            <input type = 'text' name='status'/>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Input;