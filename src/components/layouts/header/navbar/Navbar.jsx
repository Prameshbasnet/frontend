"use client";

import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import Autocomplete from "@mui/joy/Autocomplete";
import styles from "./NavBar.module.css";

const popularFoods = [
  { label: "Pizza" },
  { label: "Burger" },
  { label: "Pasta" },
  { label: "Sushi" },
  { label: "Tacos" },
  { label: "Fried Chicken" },
  { label: "Ice Cream" },
  { label: "Ramen" },
  { label: "Dumplings" },
  { label: "Pho" },
  { label: "BBQ Ribs" },
  { label: "Steak" },
  { label: "Fruit Salad" },
  { label: "Chocolate Cake" },
  { label: "Nachos" },
];

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <div className={styles.navbar}>
      <IconButton onClick={handleDrawerOpen}>
        <MenuIcon sx={{ color: "#2C3E50" }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "24px",
          backgroundColor: "#fff",
          paddingLeft: 2,
          paddingRight: 1,
          width: "300px",
          marginLeft: 2,
        }}
        className={styles.searchBar}
      >
        <Autocomplete
          options={popularFoods.map((food) => food.label)}
          placeholder="What are you craving?"
          variant="plain"
          color="neutral"
          disableClearable
          slotProps={{
            root: {
              sx: {
                flexGrow: 1,
                "--Autocomplete-gap": "0px",
                padding: 0,
              },
            },
            input: {
              sx: {
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
                boxShadow: "none",
                padding: "8px 0",
              },
            },
            popupIndicator: {
              sx: { display: "none" },
            },
          }}
        />
        <IconButton sx={{ color: "#2C3E50" }}>
          <SearchIcon />
        </IconButton>
      </Box>

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
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="Menu" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
