import React from "react";
import SideNav from "../components/SideNav";
import AccordionHome from "../components/AccordionHome";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Navbar from "../components/Navbar";
import '../Dash.css'
import ActivityChart from "../components/ActivityChart";
import Analyticsvalue from "../components/Analyticsvalue";
import TableHome from "../components/TableHome";
import CustomerReview from "../components/CustomerReview";

export default function Home() {
  return (
    <>
    <div className="bgcolor">
      <Navbar />
      <Box height={70}/>
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h2>Welcome to Dashboard</h2>
            <Grid container spacing={2}>
              {/* leftside */}
              <Grid item xs={8}>
                <Analyticsvalue />
              </Grid>
              {/* RightSide */}
              <Grid item xs={4}>
              <Stack spacing={2}>
              <Card sx={{ minWidth: 345 , height: 140}} className="gradient">
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="paddingall">
                      <Stack spacing={2}>
                      <span className="netprofit">Net Profit</span>
                      <span className="netprofitamount">$6839.75</span>
                      <span className="netprofitpercent"><ArrowDropUpIcon/> 3%</span>
                      </Stack>
                      </div>
                    </Typography>                  
                  </Card>
               </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <Stack spacing={2}>
              <Card sx={{ height: 34.5+ 'vh' }}>
                  <CardContent className="padding20">
                    <Typography gutterBottom variant="h5" component="div">
                     <ActivityChart />
                    </Typography>                  
                  </CardContent>
                </Card>
                <Card sx={{ height: 50+ 'vh' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Recent Orders
                      <TableHome />
                    </Typography>                  
                  </CardContent>
                </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
              <Stack spacing={2}>
              <Card sx={{ minWidth: 345, height: 34.5+ 'vh'}} className="padding20">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <AccordionHome />
                    </Typography>                  
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 345, height:50 +'vh'}}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Customer review
                      <CustomerReview />
                    </Typography>                  
                  </CardContent>
                </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </div>
    </>
  );
}
