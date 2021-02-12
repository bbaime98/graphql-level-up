import React, {useContext} from 'react'
import { AppContext} from '../context/context'
 const Signup = () => {
    const {name }  = useContext(AppContext)
    // console.log("Signup___", value)
    return (
        <div>
            <h1>SIGNUP PAGE</h1>
            <p>name:___{name}</p>
        </div>
    )
}

export default Signup
