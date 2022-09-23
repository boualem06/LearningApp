import Avatar from '@material-ui/core/Avatar';
import ReplayOutlined from '@material-ui/icons/ReplayOutlined'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { useState } from 'react';
const Messages = () => {
    const [list, setList] = useState([
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        },
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
    ])
    return (
            <div style={{ boxShadow: "5px 9px 6px gray" }} className="bg-white border py-4 px-4 rounded-2xl">
                <div className="flex">
                    <h1 className=" text-xl font-bold">Messages</h1>
                    < button className='bg-red-400 ml-4 rounded-lg text-white font-bold px-1 items-center'> <ReplayOutlined fontSize='small'></ReplayOutlined> new</button>
                </div>
                {list.map((ele) => (
                    <List >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar >
                                    B
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText className='' primary={ele.name} secondary={ele.message} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                ))}
                <button style={{ background: "#03c9d7" }} className='text-white font-bold  rounded py-2 w-full shadow '>See all messages</button>
            </div>
    )
}

export default Messages;