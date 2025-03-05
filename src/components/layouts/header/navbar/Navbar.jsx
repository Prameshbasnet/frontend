"use client";

import { useState } from "react";
import {
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={styles.navbar}>
      {/* Hamburger Menu */}
      <IconButton onClick={handleDrawerOpen}>
        <MenuIcon sx={{ color: "#2C3E50" }} />
      </IconButton>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <InputBase
          placeholder="What are you craving?"
          className={styles.searchInput}
        />
        <IconButton>
          <SearchIcon sx={{ color: "#2C3E50" }} />
        </IconButton>
      </div>

      {/* Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <Typography variant="h6" className={styles.drawerTitle}>
              Navigation
            </Typography>
            <IconButton
              onClick={handleDrawerClose}
              className={styles.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <List className={styles.navList}>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="Dummy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="Dummy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="Dummy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="Dummy" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
