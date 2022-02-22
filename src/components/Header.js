import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { HeadsetTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  },
  Button:{ 
    marginRight:theme.spacing(2)

  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
     
        <Button className={classes.Button} color="neutral" variant="contained" >
Connect Wallet </Button>    <HeadsetTwoTone />
        <Typography styles={{justifyContent:'space-evenly;'}} className={classes.title} variant="h6" component="h1">
     MotionDAO@KernelV Music Player </Typography>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
