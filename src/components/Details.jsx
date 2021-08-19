const Details = (props) => {
    const {description, priority} = props.info;

    return (
        <div className={'details'}>
            <p className={'priority'}>{priority} priority</p>
            <p className={'description'}>Description: {description}</p>
        </div>
    )
}

export default Details;