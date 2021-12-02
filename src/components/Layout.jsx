import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />

            <Container
                sx={{
                    mt: '5rem',
                    // display: 'flex',
                    // justifyContent: 'center',
                }}
            >
                <Outlet />
            </Container>

            <Footer />
        </>
    )
}

export default Layout;
