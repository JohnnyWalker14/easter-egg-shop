import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <ShoppingBasketIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Easter Delight Shop
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
