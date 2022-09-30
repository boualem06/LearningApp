import Communication from './Communication';
import '../App.css';
import Navbarchat from './Navbarchat';

const Chat = () => {
    // const classes = useStyles();
    
    return (
        <div style={{ height: "100%", width: "100%" }} className="flex ">
            <Communication></Communication>
            <Navbarchat></Navbarchat>
            
        </div>
    )
}
export default Chat