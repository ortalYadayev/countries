import {useState} from "react";
import Country from "./Country";

const Button = (props) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                show
            </button>
            { show ?
                <Country country={props.country} /> : ''
            }
        </div>
    )
}

export default Button;
