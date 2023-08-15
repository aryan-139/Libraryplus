import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearchQuery, toggleTheme, currentTheme }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    setSearchQuery(searchText); // Update search query immediately
  };

  const navbarStyles = {
    backgroundColor: currentTheme === 'light' ? 'white' : '#333',
    color: currentTheme === 'light' ? 'black' : 'white',
    boxShadow: '3.5%',
  };

  return (
    <AppBar position="fixed" style={{ zIndex: 1300, ...navbarStyles }}>
      <Toolbar>
        <IconButton onClick={toggleTheme}>
          <Brightness4Icon sx={{ color: currentTheme === 'light' ? 'black' : 'white' }} />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none' }}>
          LibraryPlus
        </Typography>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search by books, author name, or ISBN"
            inputProps={{ 'aria-label': 'search' }}
            value={search}
            onChange={handleSearch} // Update search query as user types
            sx={{ ml: 1, width: '500px' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
