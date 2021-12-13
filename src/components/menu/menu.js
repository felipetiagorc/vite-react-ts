import React from "react";
import MenuItem from "./menu-item";
import MenuTree from "./menu-tree";

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="/dashboard" label="Dashboard" icon="dashboard" />
    <MenuItem path="/ciclosPagamento" label="Ciclos Pagto" icon="usd" />
    <MenuTree label="Presos" icon="edit">
      <MenuItem path="/presos/form" label="Cadastrar" icon="usd" />
      <MenuItem path="/presos/list" label="Consultar" icon="usd" />
    </MenuTree>
    <MenuTree label="Visitas" icon="edit">
      <MenuItem path="/Visita" label="Consultar" icon="usd" />
      <MenuItem path="/VisitaList" label="Listar" icon="usd" />
      <MenuItem path="/VisitaForm" label="Cadastrar" icon="usd" />
    </MenuTree>
    <MenuTree label="Advogados" icon="edit">
      <MenuItem path="/AdvogadoForm" label="Cadastrar" icon="usd" />
      <MenuItem path="/AdvogadoList" label="Consultar" icon="usd" />
    </MenuTree>
  </ul>
);
