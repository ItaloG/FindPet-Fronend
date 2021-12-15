import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Encontrar from "./pages/Encontrar";
import Favoritos from "./pages/Favoritos";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import PerfilInstituicao from "./pages/PerfilInstituicao";
import PerfilPet from "./pages/PerfilPet";
import PerfilUsuario from "./pages/PerfilUsuario";
import Instituicao from "./pages/Instituicao";

import { isSignedIn } from "./services/security";

function AppRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return (
      <Route {...rest}>
        <Header />
        {children}
<<<<<<< HEAD
        <Footer />
=======
        {/* <Footer/> */}
>>>>>>> 0c85735160f966467d7c4dbde629d39834a3bf5f
      </Route>
    );
  } else {
    return <Redirect to="/" />;
  }
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
        
        <AppRoute path="/animal/:animalId">
          <PerfilPet />
        </AppRoute>

        <AppRoute path="/perfil/instituicao/:instituicaoId">
          <PerfilInstituicao />
        </AppRoute>

        <AppRoute path="/perfil/usuario/:usuarioId">
          <PerfilUsuario />
        </AppRoute>

        <AppRoute path="/instituicao/:instituicaoId">
          <Instituicao />
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
