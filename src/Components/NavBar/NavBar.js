import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../Assets/logo.jpg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom'

const pages = ["electronics", "jewelery", "men's clothing","women's clothing"];
const settings = ["Account", "Logout"];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
          <Container maxWidth="false">
            <Toolbar disableGutters>
              <img className="imgLogo" src={logo} alt="logo" />
              <Link style={linkStyles.links} to ={'/'}> 
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Rafa's HW store
              </Typography>
              </Link>
            
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"> 
                      <NavLink style={burgerLinkStyles.links} to ={`/Category/${page}`}>
                      {page}
                      </NavLink>  
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Link style={rhsLogo.links}to ="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                }}
              >
                RHS
              </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <NavLink style={linkStyles.links} to ={`/Category/${page}`}>
                      {page}
                    </NavLink>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Link style = {linkStyles.links} to ={"/cart"}>
              <CartWidget />
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
    );    
};

const linkStyles = {
    links: {
      textDecoration:"none",
      color:"white"
    }
}

const burgerLinkStyles = {
  links: {
    textDecoration:"none",
    color:"black"
  }
}

const rhsLogo = {
  links: {
    textDecoration:"none",
    color:"white",
    flexGrow:"1"

  }
}

export default ResponsiveAppBar;
