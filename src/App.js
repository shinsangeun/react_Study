import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Player from "./routes/Video";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/video" component={Player} />
        </HashRouter>
    );
}

export default App;