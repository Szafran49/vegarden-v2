import { useAuth } from '../contexts/AuthContexts'
import { Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component }, ...rest) {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Route to="/" />
            }} />
    )
}