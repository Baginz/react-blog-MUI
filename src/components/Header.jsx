import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ mr: "30px" }}
                >
                    Logo
                </Typography>
                <Button  onClick={() => navigate("/")} sx={{ my: 2, color: 'white', display: 'block' }}> Home </Button>
                <Button  onClick={() => navigate("/posts")} sx={{ my: 2, color: 'white', display: 'block' }}> Blog </Button>
                <Button  onClick={() => navigate("/about")} sx={{ my: 2, color: 'white', display: 'block' }}> About </Button>
            </Toolbar>
        </AppBar>


    )
}

export default Header;

