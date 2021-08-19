const Details = (props) => {
    const {description, priority} = props.info;

    return (
        <div>
            <p>Description</p>
            <p>{description}</p>
            <p>Priority</p>
            <p>{priority}</p>
        </div>
    )
}

export default Details;