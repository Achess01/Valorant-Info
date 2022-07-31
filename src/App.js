import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes, Route, HashRouter } from "react-router-dom";
import SearchAgents from "./SearchAgents";
import Details from "./Details";
import Header from "./Header";
import { LanguageContext, languages } from "./LanguageContext";
import Footer from "./Footer";

const App = () => {
  const lang = useState(languages[0].lang);
  return (
    <LanguageContext.Provider value={lang}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<SearchAgents />} />
            <Route path="details/:uuid" element={<Details />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </LanguageContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
