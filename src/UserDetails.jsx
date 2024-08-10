import {useParams} from "react-router-dom";

const UserDetails = ()=>{
    const {id} = useParams();
    //fetch user details from the api
    return (
        <div>
            <h1>User Details</h1>
            {JSON.stringify(id)}
        </div>
    );
}

export default UserDetails;