import  Login  from 'components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                Or <Link to="/register">register</Link>
            </p>
          
            <p>Login: test@test.com password: 123456</p>
        </div>
    )
}

export default LoginPage