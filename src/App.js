import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import PageShop from "./pages/PageShop";
import PageSignInSignUp from "./pages/PageSignInSignUp";
import { connect } from "react-redux";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

function App({ setCurrentUser }) {
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
        setCurrentUser({});
      }
    });

    return () => {
      //se desinscrire du listener de firebase quand l'app est démontée
      unsubscribeFromAuth();
    };
  }, []);

  return (
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
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
