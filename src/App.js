import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import PageShop from "./pages/PageShop";
import PageSignInSignUp from "./pages/PageSignInSignUp";
import { auth } from "../src/firebase/firebase.utils";

export const App_datas = React.createContext({
  user: {},
});

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  const unsubscribeFromAuth = auth.onAuthStateChanged(function (user) {
    // handle it
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("log1", user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <App_datas.Provider value={{ ...App_datas, user: currentUser }}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/shop" component={PageShop} />
            <Route path="/signin" component={PageSignInSignUp} />
            <Route path="/signout" component={Accueil} />
          </Switch>
        </Layout>
      </Router>
    </App_datas.Provider>
  );
}
