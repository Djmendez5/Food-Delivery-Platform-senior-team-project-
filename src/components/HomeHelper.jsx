import React, { Component } from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import AuthHelperMethods from "./AuthHelperMethods";
import Accountinfo from "./Accountinfo";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

const styles2 = {};

styles2.button = {
  position: "absolute",
  fontSize: "20px",
  color: "red",
  padding: 10,
  fontWeight: "bold",
  border: "transparent"
};

styles2.menuButton = {
  fontWeight: "bold",
  border: "transparent",
  textDecoration: "none",
};

class Dropdown extends React.Component {
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();

  /* Add the following into _handleLogout*/
  _handleLogout = () => {
    this.Auth.logout();
    this.Info.logout();
    //this.props.history.replace('/login');
  };
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    // if (this.anchorEl.contains(event.target)) {
    //   return;
    // }
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          style={styles2.button}
        >
          Options
        </Button>
        <Popper open={open} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/profile" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Profile
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this._handleLogout} style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Logout
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/addmenuitem" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Add Menu Item
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/displaymenu" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Show Menu
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/addrestaurant" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Add Restaurant
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/listrestaurants" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Find Restaurant
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/addorder" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Add Order
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/orderhistory" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Order History
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to="/review" style ={styles2.menuButton}>
                        <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                          Write a Review
                        </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/addpic" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Add Picture
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/getpic" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Get Picture
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/chat" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Chat
                      </Button>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <Link to="/profit" style={styles2.menuButton}>
                      <Button color="secondary" variant="contained" size="medium" className=""  style={styles2.menuButton}>
                        Show Profit
                      </Button>
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Dropdown;