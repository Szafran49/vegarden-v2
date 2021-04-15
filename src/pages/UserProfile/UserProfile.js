import { useAuth } from '../../contexts/AuthContexts'
import LoggedInUser from './LoggedInUser'

export default function UserProfile() {
    const { currentUser } = useAuth()

    return (
        <>
            {currentUser !== null ? <LoggedInUser /> : null}
        </>
    )
}