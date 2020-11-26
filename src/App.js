import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import PageShop from "./pages/PageShop";
import PageSignInSignUp from "./pages/PageSignInSignUp";

export const Store = React.createContext();

export default function App() {
  return (
    <Store.Provider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/shop" component={PageShop} />
            <Route path="/signin" component={PageSignInSignUp} />
          </Switch>
        </Layout>
      </Router>
    </Store.Provider>
  );
}

const Pantalon = () => {
  return <div>pantalon</div>;
};
