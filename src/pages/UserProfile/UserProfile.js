import { useAuth } from '../../contexts/AuthContexts'
import LoggedInUser from './LoggedInUser'

export default function UserProfile() {
    const { currentUser } = useAuth()
    console.log(currentUser);
    return (
        <>
            {currentUser !== null ? <LoggedInUser /> : null}
        </>
    )
}