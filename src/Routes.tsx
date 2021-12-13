import React from "react";
import { Switch, Route } from "react-router-dom";


import Home from "./pages/Home";

// import PresoForm from "./pages/presos/presoForm";
// import PresoList from "./pages/presos/presoList";
// import VisitaForm from "./pages/presos/visitas/visitaForm2";
// import VisitaList from "./pages/presos/visitas/visitaList";
// import Visita from "./pages/presos/visitas/visitas";

// import Dashboard from "./dashboard/dashboard";
import Dash2 from "./dash2/dash2";
import CicloPgto from "./cicloPgto/cicloPgto";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dash2} />

    <Route exact path="/ciclosPagamento" component={CicloPgto} />

    <Route exact path="/presos/form" component={PresoForm} />
    <Route exact path="/presos/list" component={PresoList} />
    <Route exact path="/visita" component={Visita} />
    <Route exact path="/visitaForm" component={VisitaForm} />
    <Route exact path="/VisitaList" component={VisitaList} />
  </Switch>
);
