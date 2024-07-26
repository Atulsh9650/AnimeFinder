import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/otaku.png';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <img src={logo} height={"30px"} width={"30px"}  style={{margin:"0px 10px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AnimeFlex
          </Typography>
          <Button color="inherit" size='large'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
