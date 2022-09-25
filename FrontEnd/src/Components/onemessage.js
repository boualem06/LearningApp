import { Avatar } from '@material-ui/core';
const Onemessage=({own})=>{

    return(
        <div style={{ width: "100%", marginBottom: 10 }} className={own ? " flex justify-end mr-2  " : "  ml-2 flex  justify-begin"}>
        {own ?
            <div className='flex mr-2'>

                <h1 className={own ? "bg-blue-500 px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg text-white" : "bg-white px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg "} >
                    hellllloooo how are you doing today!!!!!!!
                </h1>
                <Avatar className='ml-2'> B</Avatar>
            </div>
            : <div className='flex ml-2 '>
                <div>
                    <Avatar className='mr-2'> B</Avatar>

                </div>

                <h1 className={own ? "bg-blue-500 px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg text-white" : "bg-white px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg "} >
                    hellllloooo how are you doing today
                </h1>

            </div>
        }

    </div>
    )
}

export default Onemessage ;