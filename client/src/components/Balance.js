import React, {useContext} from 'react'
import { UserContext } from "../context/GlobalState";


const Balance = ({ user }) => {
    const { users } = useContext(UserContext);
    return (
        <div>
            <h4>$500</h4>
        </div>
    )
}

export default Balance

//todo wire this up to balance in data store


//const { users } = useContext(UserContext);
