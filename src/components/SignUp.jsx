import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from 'components/Form';
import { setUser } from 'store/slices/userSlice';
import { Box } from '@mui/system';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                localStorage.setItem("jwt", user.accessToken)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (

        <Form
            title="register"
            handleClick={handleRegister}
        />

    )
}

export default SignUp