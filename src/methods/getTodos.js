const getTodos = () => {
    if (localStorage.length > 0) {
        return Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
    }
    return []
}

export default getTodos;