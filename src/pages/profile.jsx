import React from 'react';
import { Container  } from 'react-bootstrap';
import {useUserAuth} from "../context/UserAuthContext"
const ProfilePage = () => {
    const { user } = useUserAuth()
    
    //console.log('currentUser', user)
    return ( 
        <React.Fragment>
            <Container>
                {/* {user && <pre> {JSON.stringify(user, null, 2)}</pre>} */}
                <div className="page-bg">
                    <h1>PROFILE INFO</h1>
                    <div className="info-text">
                        Thanks!<br/>
                        We have received your message and would like to thank you for writing to us. <b>You can create your comment now.</b>
                    </div>
                </div>
            </Container>    
        </React.Fragment>
     );
}
 
export default ProfilePage;
