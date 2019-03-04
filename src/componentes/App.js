import React, { Component } from "react";
import { Saludo } from "./Saludo";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Pelicula } from "./Pelicula";
import { PaginaNoExiste } from "./PaginaNoExiste";
import { Menu } from "./Menu";
import { Inicio } from "./Inicio";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} />
            <Route path="/peliculas" component={Pelicula} />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
