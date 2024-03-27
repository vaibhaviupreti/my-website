import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useStyles} from '../style/CommonCSS'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconButton><MenuIcon className={classes.MenuIcon}/></IconButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className={classes.customMenu}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Trending</MenuItem>
        <MenuItem onClick={handleClose}>Snippets</MenuItem>
        <MenuItem onClick={handleClose}>Videos</MenuItem>
        <MenuItem onClick={handleClose}>Instagram</MenuItem>
        <MenuItem onClick={handleClose}>Github</MenuItem>
        <MenuItem onClick={handleClose}>Youtube</MenuItem>
        <MenuItem onClick={handleClose}>Linkedin</MenuItem>
        <MenuItem onClick={handleClose}>Stack Overflow</MenuItem>
      </Menu>
    </div>
  );
}