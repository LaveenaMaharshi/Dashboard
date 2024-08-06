import React from 'react'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Reports() {
    return (
        <>
            <Navbar />
            <Box height={30}>
                <Box sx={{ display: 'flex' }}>

                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />

                        <h1>Reports</h1>
                    </Box>
                </Box>
            </Box>
        </>

    )
}
