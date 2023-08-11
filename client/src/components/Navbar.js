import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { handleSearchSubmit } from '../utils/handleSearchSubmit';

const Navbar = () => {
    const [search, setSearch] = React.useState('');
    
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    //send the search param here
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearchSubmit(search); 
      };
    
  return (
    <AppBar position="fixed" style={{ zIndex: 1300, backgroundColor: "white", boxShadow:"3.5%" }} >
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none'  }}>
          LibraryPlus
        </Typography>
        <form onSubmit={handleSubmit}> {/* Wrap your search input in a form */}
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search by books, author name, or ISBN"
              inputProps={{ 'aria-label': 'search' }}
              value={search} // Set the value of the input to the search state
              onChange={handleSearch} // Call the handleSearch function on input change
              sx={{ ml: 1, color: 'black', width: '500px' }}
            />
          </div>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
