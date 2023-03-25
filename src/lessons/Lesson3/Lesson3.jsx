import { useState } from "react";
import CoolButton from './CoolButton'

const Lesson3 = (props) => {
    const [name, setName] = useState('')
    return (
        <div>
            <label>Name:</label>
            <input
                onChange={e => setName(e.target.value)}
                type={'text'}
            />
            <div>Your name 's {name} </div>
            <CoolButton
                btnClass="primary"
                title="primary"
            />
        </div>
    )
}

export default Lesson3;