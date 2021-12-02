import { Button, TextField } from '@mui/material';
import { useState } from 'react';

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <TextField
                label='email'
                variant="standard"
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                    mb: "1.5rem",
                    mt: "10px",
                    ml: "10px"
                }}
            />
            <TextField
                label='password'
                variant="standard"

                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                sx={{
                    mb: "1.5rem",
                    mt: "10px",
                    ml: "10px"
                }}
            />
            <Button variant="contained" onClick={() => handleClick(email, pass)} sx={{
                mt: "15px",
                ml: "10px"
            }}> {title}</Button>
        </div>
    )
}

export default Form;
