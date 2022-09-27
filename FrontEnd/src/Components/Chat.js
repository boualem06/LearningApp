import Communication from './Communication';
import '../App.css';
import Navbarchat from './Navbarchat';

const Chat = () => {
    // const classes = useStyles();
    
    return (
        <div style={{ height: "100vh", width: "100%" }} className="flex ">
            <Navbarchat></Navbarchat>
            <Communication></Communication>
        </div>
    )
}
export default Chat