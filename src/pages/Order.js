import React from 'react'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TableHome from '../components/TableHome';


export default function Order() {
  return (
    <>
    <Navbar />
    <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 , margin:10, padding:10}}>
        <Box height={100}>
        <h1> Recent Orders</h1>
        <TableHome />
         </Box>
      </Box>
      </Box>
</>
    
  )
}
