import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../../styles/output.css"
import './style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        position: "relative",
        left: "3.5%"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    bar: {
        background:  "rgb(42, 46, 40)"
    },
    links: {
        color: "#fff",
        backgroundColor: "transparent",
        display: "block",
        padding: ".5rem 1rem",
        transition: "color .3s",
        textAlign: "center",
        "&:hover": {
            textDecoration: "none",
            color: "#1b62b3"
        }
    },
    menuIcons: {
        paddingRight: "10%",
    },
    menuLinks: {
        color: "#fff",
        backgroundColor: "transparent",
        display: "block",
        transition: "color .3s",
        "&:hover": {
            textDecoration: "none",
            color: "#1b62b3"
        }
    },
    menu: {
        background: "rgb(42, 46, 40)",
        transition: "color .3s, background .3s !important",
        "&:hover": {
            color:  "#1b62b3 !important",
            background: "#fff !important"
        }
    },
    barIcon: {
        position: "relative",
        bottom: "3px",
        fontSize: "24px !important",
        
    }
  }));
export default function Header() {
    const  classes  = useStyles();
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      
      
        const handleMobileMenuClose = () => {
          setMobileMoreAnchorEl(null);
        };
      
      
        const handleMobileMenuOpen = (event) => {
          setMobileMoreAnchorEl(event.currentTarget);
        };
        // const menuId = 'primary-search-account-menu';
        // const renderMenu = (
        //   <Menu
        //     anchorEl={anchorEl}
        //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        //     id={menuId}
        //     keepMounted
        //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        //     open={isMenuOpen}
        //     onClose={handleMenuClose}
        //   >
        //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        //   </Menu>
        // );
      
      
        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
                <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
                onClick={handleMobileMenuClose}
                >
                <a className={classes.menuLinks} href="#home">
                    <MenuItem className={classes.menu}>
                        Home
                    </MenuItem>
                </a>
                <a className={classes.menuLinks} href="#about">
                    <MenuItem className={classes.menu}>
                        About
                    </MenuItem>
                </a>
                <a className={classes.menuLinks} href="#contact">
                    <MenuItem className={classes.menu}>
                        Contact
                    </MenuItem>
                </a> 
                <a className={classes.menuLinks} href="#">
                    <MenuItem className={classes.menu}>
                    Support<AccessibilityNewIcon className = {classes.barIcon}/>
                    </MenuItem>
                </a> 
                </Menu>
        );
        return (
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.bar}>
                    <Toolbar>
                        {/* <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography className={classes.grow}  variant="h6" noWrap>
                            TPAAN
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#home"
                            >
                                Home
                            </a>
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#about"
                            >
                                About
                            </a>
                        </Typography>
                        <Typography className={classes.title} variant="h8" noWrap>
                            <a
                                className={classes.links}
                                href="#contact"
                            >
                                Contact
                            </a>
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                                <a
                                class="nav-link waves-effect waves-light"
                                href="#"
                                >
                                    <button className="btn btn-primary waves-light finish">Support TPAAN<AccessibilityNewIcon className = {classes.barIcon}/></button>
                                </a>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {/* {renderMenu} */}
          </div>
       
        )
}







{/* <nav
        class="navbar fixed-top navbar-expand-lg indigo navbar-dark scrolling-navbar"
      >
        <div class="container">
          <span class="navbar-brand brand">Keshav Avva</span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto smooth-scroll">
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="#home">
                    Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link waves-effect waves-light"
                  href="#about"
                  data-offset="95"
                >
                    About
                </a>
              </li>
              {/* <li class="nav-item">
                <a
                  class="nav-link waves-effect waves-light"
                  href="#skills"
                  data-offset="75"
                  >Skills</a
                >
              </li> */}
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="#portfolio"
    //               data-offset="100"
    //             >
    //                 Portfolio
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="#contact"
    //               data-offset="97"
    //             >
    //                 Contact
    //             </a>
    //           </li>
    //         </ul>
    //         <ul class="navbar-nav nav-flex-icons">
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="https://github.com/keshavsavva"
    //             >
    //                 <GitHubIcon className="icon"/>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="https://drive.google.com/file/d/1JE8D7i6qQc2d9EnRE343eico7PWoV-uS/view?usp=sharing"
    //             >
    //                 <DescriptionIcon className="icon"/>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link waves-effect waves-light"
    //               href="https://www.linkedin.com/in/keshavsavva/"
    //             >
    //                 <LinkedInIcon className="icon"/>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> 