import React from 'react'
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Analyticsvalue() {
  return (
    <div><Stack direction="row" spacing={2}>
    <Card sx={{ minWidth: 23.5 + '%', height:140 }} className="gradientgreen">
        <Typography gutterBottom variant="h5" component="div">
        <div className="paddingall">
          <Stack spacing={2}>
            <ShoppingBasketIcon className="icon-blue" />
          <span className="netprofit">Total Orders</span>
          <Stack direction="row" justifyContent="space-between">
          <span className="netprofitamount">75</span>
          <span className="netprofitpercent"><ArrowDropUpIcon/> 3%</span>
          </Stack>
          </Stack>
          </div>
        </Typography>
     </Card>
     <Card sx={{ minWidth: 23.5 + '%', height:140 }} className="gradientgreen">
        <Typography gutterBottom variant="h5" component="div">
        <div className="paddingall">
          <Stack spacing={2}>
            <ShoppingBasketIcon className="icon-blue" />
          <span className="netprofit">Total Orders</span>
          <Stack direction="row" justifyContent="space-between">
          <span className="netprofitamount">75</span>
          <span className="netprofitpercent"><ArrowDropUpIcon/> 3%</span>
          </Stack>
          </Stack>
          </div>
        </Typography>
     </Card>
     <Card sx={{ minWidth: 23.5 + '%', height:140 }} className="gradientgreen">
        <Typography gutterBottom variant="h5" component="div">
        <div className="paddingall">
          <Stack spacing={2}>
            <ShoppingBasketIcon className="icon-blue" />
          <span className="netprofit">Total Orders</span>
          <Stack direction="row" justifyContent="space-between">
          <span className="netprofitamount">75</span>
          <span className="netprofitpercent"><ArrowDropUpIcon/> 3%</span>
          </Stack>
          </Stack>
          </div>
        </Typography>
     </Card>
     <Card sx={{ minWidth: 23.5 + '%', height:140 }} className="gradientgreen">
        <Typography gutterBottom variant="h5" component="div">
        <div className="paddingall">
          <Stack spacing={2}>
            <ShoppingBasketIcon className="icon-blue" />
          <span className="netprofit">Total Orders</span>
          <Stack direction="row" justifyContent="space-between">
          <span className="netprofitamount">75</span>
          <span className="netprofitpercent"><ArrowDropUpIcon/> 3%</span>
          </Stack>
          </Stack>
          </div>
        </Typography>
     </Card>
   </Stack>
   </div>
  )
}
