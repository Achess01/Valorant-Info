import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchAgents from "./SearchAgents";

const App = () =>{
    return (    
        <SearchAgents />    
    );
}

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
)