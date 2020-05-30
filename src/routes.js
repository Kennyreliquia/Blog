import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home/index";
import About from "./pages/sobre/index";
import Dicas from "./pages/dicas/index";
import Saiba from "./pages/saibacomo/index";
import Forum from "./pages/forum/index";
import Doar from "./pages/doar/index";
import Contactos from "./pages/contactos/index";

import Nav from "./components/NavBar/simple";
import Footer from "./components/Footer/footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/dicas" component={Dicas} />
        <Route path="/saibacomo" component={Saiba} />
        <Route path="/plus.linuxfossangola" component={Forum} />
        <Route path="/doar" component={Doar} />
        <Route path="/contactos" component={Contactos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
