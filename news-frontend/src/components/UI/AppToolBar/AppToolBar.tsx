import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material";
import { NavLink } from 'react-router-dom';


const MyAppBar = styled(Box)({
  background: '#5F9EA0',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit'
  },
});
const AppToolBar = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center"}}>
      <MyAppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              News portal
            </Typography>
          </NavLink>

        </Toolbar>
      </MyAppBar>
    </Box>
  );
};
export default AppToolBar;