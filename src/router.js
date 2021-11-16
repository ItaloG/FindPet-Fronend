import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Encontrar from "./pages/Encontrar";
import Favoritos from "./pages/Favoritos";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import PerfilInstituicao from "./pages/PerfilInstituicao";
import PerfilPet from "./pages/PerfilPet"
// import PerfilInstituicaoUsuario from "./pages/PerfilInstituicao/usuarioindex";
// import { isSignedIn } from "./services/security";

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
          <Feed />
        </AppRoute>
        <AppRoute path="/pets">
          <PerfilPet />
        </AppRoute>
        <AppRoute path="/instituicao/:instituicaoId">
          <PerfilInstituicao />
        </AppRoute>
        {/* <AppRoute path="/instituicao">
          <PerfilInstituicaoUsuario />
        </AppRoute> */}
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
