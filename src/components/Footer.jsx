import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            left: 850,
            paddingBottom: 10,
        }}>
            <Typography>Footer &copy;2021</Typography>
        </div>
    )
}

export default Footer
