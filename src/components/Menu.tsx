import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import type { MenuProps } from "../interfaces";
import { routes } from "../routes";
import { useState } from "react";

export default function Menu(props: MenuProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const handleStatusOpen = () => setStatusOpen(true);
  const handleStatusClose = () => setStatusOpen(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      <AppBar position="static" className="menu-bar">
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              {props.header}
            </Typography>
          </Box>

          <Box
            onClick={handleStatusOpen}
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "var(--success-color)",
              boxShadow: "0 0 10px var(--success-color)",
              flexShrink: 0,
            }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "var(--primary-color)",
            color: "white",
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routes.map((route) => (
              <ListItem key={route.name} disablePadding>
                <ListItemButton component={RouterLink} to={route.path}>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Dialog
        open={statusOpen}
        onClose={handleStatusClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>System Status: Healthy</DialogTitle>

        <DialogContent>
          <DialogContentText>
            The energy monitoring system is currently operating normally. All
            telemetry devices are online, battery state of charge is within
            expected limits, solar generation is available, and no critical
            faults have been detected.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleStatusClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
