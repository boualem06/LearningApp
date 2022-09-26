import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Onemessage from './onemessage';
import { AttachFile, Image, Send } from '@material-ui/icons/'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            //   width: '25ch',
        },
    },
    search: {
        marginBottom: 10,
        marginTop: 10,
        padding: 6,
        color: "white",
        width: "100%"
    }
    ,
    message: {
        padding: 2,
        width: "100%"
    },
    file: {
        color: "gray"
    }
    ,
    send: {
        color: "white"
    }
}));
const Communication=()=>{
    const classes = useStyles();
    return(
        <div style={{ background: "#cbcbe2", width: "100%", height: "100vh" }} className=" pt-2 flex flex-col overflow-y-scroll overflow-x-hidden ">
        <Onemessage own={true}></Onemessage>
        <Onemessage own={false}></Onemessage>

        <div className=' w-full bg-white h-12 border border-t-2 border-t-sky-500 flex items-center justify-between px-4'>

            <InputBase onChange={(e) => { console.log(e.target.value) }} className={classes.message} placeholder="Type Something ..." />
            <div className='flex '>
                <button className='mr-3'><AttachFile className={classes.file} ></AttachFile></button>
                <button className='mr-3'><Image className={classes.file}></Image></button>
                <button className='flex px-2 py-1 rounded items-center bg-blue-500 text-white font-bold'>send<Send className={classes.send}> </Send></button>

            </div>

        </div>



    </div>
    )
}

export default Communication ;