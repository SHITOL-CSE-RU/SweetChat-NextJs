import { Circle } from "better-react-spinkit";
function Loading() {
    return (
        <center style={{display:"grid", placeItems: "center", height: "100vh"}}>
           <div>
               <img src="https://www.pngitem.com/pimgs/m/148-1489584_chat-png-icon-free-download-searchpng-blue-chat.png" alt="" 
               style={{marginBottom:10}}
               height={200}
               />
               <Circle color="#3CB3C8" size={60}/> 
            </div> 
        </center>
    )
}

export default Loading
