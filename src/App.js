import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
const App=()=>{
    return(
    <ChatEngine
    height="100vh"
    projectID=""
    userNam=""
    userSecret=""
    renderChatFeed={(chatAppProps)  => <ChatFeed {...chatAppProps}/>}
    />
    );   
}
export default App; 