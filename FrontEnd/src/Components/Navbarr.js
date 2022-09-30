import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Avatar from '@material-ui/core/Avatar';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    iconButton: {
        borderRadius: "25px",
        background: "#ede7f6",
        color: "#a58ed3",
        padding: 6,

    },
    iconButton3: {
        borderRadius: "25px",
        padding: 6,

    },
    iconButton2: {
        borderRadius: "25px",
        
        color: "#81c3f7",
        padding: 6,
    },
    divider: {
        height: 28,
        margin: 4,
    }
}));

export default function Navbarr() {
    const classes = useStyles();

    return (
        <div className='py-2 bg-white sticky top-0 md:px-4 bg-ed-600 flex items-center justify-between'>
            <Drawer></Drawer>
            <Paper component="form" className=" w-1/2 flex justify-between px-2 py-1 items-center">

                <InputBase
                    className={classes.input}
                    placeholder="Search For something..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" className={classes.iconButton3} aria-label="search">
                    <SearchIcon/>
                </IconButton>

            </Paper>
            <div className='flex '>
                {/* <IconButton   className={classes.iconButton} aria-label="search">
                    < NotificationsNone className='md:mr-[18px]'></NotificationsNone>
                </IconButton> */}
                <div className='md:bg-[#e3f2fd] flex px-2 py-1 rounded-full'>
                    <Avatar className='md:mr-4 hover:cursor-pointer'  >N</Avatar>
                    <div className='hidden md:block'><IconButton  className={classes.iconButton2} aria-label="search">
                        < SettingsOutlined></SettingsOutlined>
                    </IconButton></div>
                    
                </div>


            </div>
        </div>


    );
}