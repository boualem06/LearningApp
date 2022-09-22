import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Avatar from '@material-ui/core/Avatar';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'

const useStyles = makeStyles((theme) => ({
    iconButton: {
        borderRadius: "25px",
        background: "#ede7f6",
        color: "#a58ed3",
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
        <div className='py-2 px-4 bg-ed-600 flex items-center justify-between'>
            <Paper component="form" className=" w-1/2 flex justify-between px-2 py-1 items-center">

                <InputBase
                    className={classes.input}
                    placeholder="Search For something..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <div className='flex '>
                <IconButton style={{marginRight:18}}  className={classes.iconButton} aria-label="search">
                    < NotificationsNone></NotificationsNone>
                </IconButton>
                <div style={{background:"#e3f2fd"}} className=' flex px-2 py-1 rounded-full'>
                    <Avatar className='mr-4 hover:cursor-pointer'  >N</Avatar>
                    <IconButton  className={classes.iconButton2} aria-label="search">
                        < SettingsOutlined></SettingsOutlined>
                    </IconButton>
                    
                </div>


            </div>
        </div>


    );
}
