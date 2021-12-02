import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { removeUser } from 'store/slices/userSlice'

const Createpost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Create a post</h1>
            {/* <button onClick={() => { dispatch(removeUser()); navigate('/', { replace: true }); }}>Log Out</button> */}
        </div>
    )
}

export default Createpost;
