import React from 'react';
import { Container  } from 'react-bootstrap';
import {useUserAuth} from "../context/UserAuthContext"
const ProfilePage = () => {
    const { user } = useUserAuth()
    
    //console.log('currentUser', user)
    return ( 
        <React.Fragment>
            <Container>
                {user && <pre> {JSON.stringify(user, null, 2)}</pre>}
            </Container>    
        </React.Fragment>
     );
}
 
export default ProfilePage;
