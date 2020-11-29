import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import PageShop from "./pages/PageShop";
import PageSignInSignUp from "./pages/PageSignInSignUp";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";

export const App_datas = React.createContext({
  user: {},
});

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //vérifier si il y'a un utilisateur authentifié
      if (userAuth) {
        //creer ou recuperer l'utilisateur dans la bd
        const userRef = await createUserProfileDocument(userAuth);

        //recupérer utlisateur dans le state de l'application
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        //si personne n'est authentifié
        setCurrentUser(null);
      }
    });

    return () => {
      //se desinscrire du listener de firebase quand l'app est démontée
      unsubscribeFromAuth();
    };
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
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
