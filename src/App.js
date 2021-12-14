import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAgents from "./SearchAgents";
import Details from "./Details";

const App = () =>{
    return (
        <BrowserRouter>                
        <Routes>
            <Route path="/" element={<SearchAgents />} />
            <Route path="/details/:uuid" element={<Details />} />
        </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
)