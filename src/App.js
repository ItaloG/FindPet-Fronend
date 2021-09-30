import Card from "./components/Card";
import { GlobalStyles } from "./GlobalStyles";

import PaginaEncontrar from "./pages/Encontrar";
import Favoritos from "./pages/Favoritos";
import PaginaFeed from "./pages/Feed";
import Login from "./pages/Login";
import Router from "./router";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Router />

    </>
  );
}

export default App;
