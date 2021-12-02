import {Navigate, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from 'hooks/useAuth';
import {removeUser} from 'store/slices/userSlice'

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button
                onClick={()=> { dispatch(removeUser()); navigate('/', { replace: true }); }}
            >Log out from {email}</button>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default HomePage;