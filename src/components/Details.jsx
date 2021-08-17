import { useState } from "react";

const Details = (props) => {
    const {description, priority} = props.info;
    const [display, setDisplay] = useState(false);

    const butttonLabel = (display) ? 'Close' : 'More';

    return (display) ?  (
        <div>
            <p>Description</p>
            <p>{description}</p>
            <p>Priority</p>
            <p>{priority}</p>
            <button onClick={() => setDisplay(!display)}>{butttonLabel}</button>    
        </div>
    ): (
        <button onClick={() => setDisplay(!display)}>{butttonLabel}</button>
    )
}

export default Details;