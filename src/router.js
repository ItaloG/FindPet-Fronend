import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Encontrar from "./pages/Encontrar";
import Favoritos from "./pages/Favoritos";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import PerfilInstituicao from "./pages/PerfilInstituicao";

function AppRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      <Header />
      {children}
    </Route>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <AppRoute path="/home">
            <PerfilInstituicao />
          </AppRoute>
          <AppRoute path="/favoritos">
            <Favoritos />
          </AppRoute>
          <AppRoute path="/mapa">
            <Encontrar />
          </AppRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;