import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import dashboardLogo from "../../../img/logo.png";
import { Link, NavLink } from "react-router-dom";
import paymentIMG from "../../../img/Banner-Background/payment.png";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

function Review(props) {
  const { logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img src={dashboardLogo} className="img-fluid p-3" width="200px" alt="" />
      <Divider />
      <List>
        {/* {["Home", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}

        <li>
          {" "}
          <NavLink
            to="/home"
            className="ps-3"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="ps-3"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pay"
            className="ps-3"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            Pay
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myOrder"
            className="ps-3"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            My Oder
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allOrders"
            className="ps-3"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            All Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/review"
            className="ps-3"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            Review
          </NavLink>
        </li>
        <button onClick={logOut} className="btn-danger btn ms-3">
          LogOut
        </button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <h1 className="text-center mt-5">My Reviews</h1>
      </Box>
    </Box>
  );
}

Review.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Review;
