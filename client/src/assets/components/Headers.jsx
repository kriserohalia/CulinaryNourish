import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {CgProfile} from 'react-icons/cg'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Headers() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Culinary Nourish
          </Typography>
    <nav className="bg-transparent text-black p-4">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-6">
          <li className="relative group"> 
            <button className="hover:text-gray-300 text-white">Meals</button>
            <ul className="hidden absolute left-0 top-full mt-2 space-y-2 group-hover:block bg-gray-100 p-2 ">
              <li><a className="hover:text-gray-300" href="#">Breakfast</a></li>
              <li><a className="hover:text-gray-300" href="#">Lunch</a></li>
              <li><a className="hover:text-gray-300" href="#">Dinner</a></li>

            </ul>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-300 text-white">Cuisine</button>
            <ul className="hidden absolute left-0 top-full mt-2 space-y-2 group-hover:block  bg-gray-300 p-2">
              <li><a className="hover:text-gray-300" href="#">Indonesian food</a></li>
              <li><a className="hover:text-gray-300" href="#">Indonesian food</a></li>
              <li><a className="hover:text-gray-300" href="#">Indonesian food</a></li>
              <li><a className="hover:text-gray-300" href="#">Indonesian food</a></li>
            </ul>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-300 text-white">Healthy</button>
            <ul className="hidden absolute left-0 top-full mt-2 space-y-2 group-hover:block  bg-gray-300 p-2">
              <li><a className="hover:text-gray-300" href="#">Carbohidrate</a></li>
              <li><a className="hover:text-gray-300" href="#">Protein</a></li>
              <li><a className="hover:text-gray-300" href="#">Fat</a></li>
              <li><a className="hover:text-gray-300" href="#">Fat</a></li>
              <li><a className="hover:text-gray-300" href="#">Fat</a></li>
            </ul>
          </li>
          <li className="relative group">
            <button className="hover:text-gray-300 text-white">Diet</button>
            <ul className="hidden absolute left-0 top-full mt-2 space-y-2 group-hover:block  bg-gray-300 p-2">
              <li><a className="hover:text-gray-300" href="#">Salad</a></li>
              <li><a className="hover:text-gray-300" href="#">Salad</a></li>
              <li><a className="hover:text-gray-300" href="#">Salad</a></li>
              <li><a className="hover:text-gray-300" href="#">Salad</a></li>
              <li><a className="hover:text-gray-300" href="#">Salad</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <button><CgProfile size={36}/></button>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
