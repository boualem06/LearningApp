import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Drawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='md:hidden'>
      <Button
        onClick={handleClick}
      >
      <MenuIcon/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <HomeRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <LibraryBooksOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <HelpOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Exercices" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AssignmentTurnedInOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Solutions" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <QuestionAnswerOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </StyledMenuItem>
        
        <StyledMenuItem>
          <ListItemIcon>
            <CalendarTodayOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </StyledMenuItem>
        
      </StyledMenu>
    </div>
  );
}
