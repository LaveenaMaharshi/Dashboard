import React from 'react'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Analyticsvalue from '../components/Analyticsvalue';
import Box from '@mui/material/Box';
import ActivityChart from '../components/ActivityChart';
import { PieChart } from '@mui/icons-material';
import Card from "@mui/material/Card";
import GeoChart from '../components/GeoChart'


export default function Analytics() {
  return (
    <div>
      <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex" }}>
              <SideNav />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                  {/* leftside */}
                  <Grid item xs={8}>
                    <Analyticsvalue />
                    <Box height={20} />
                    <ActivityChart />
                    <Box height={20} />
                    <GeoChart />
                  </Grid>
                  {/* RightSide */}
                  <Grid item xs={4}>
                    <Stack spacing={2}>
                      <Card sx={{ minWidth: 345 , height: 140}}><PieChart /></Card>
                      
                      {/* right side */}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>       
      </div>
      )
}
