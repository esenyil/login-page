import { useAuthContext } from '../hooks/useAuthContext';

function Welcome(){
    const { user } = useAuthContext()
    
    return(
        <div className="welcome">
            <p>Welcome {user.displayName}</p>
            <small>You are now logged in</small>
        </div>
    )
}
export default Welcome;