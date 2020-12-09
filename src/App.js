import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import PageShop from "./pages/PageShop";
import PageSignInSignUp from "./pages/PageSignInSignUp";
import PageCheckout from "./pages/PageCheckout";
import { connect } from "react-redux";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ setCurrentUser, currentUser }) {
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
        setCurrentUser(userAuth);
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
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <PageSignInSignUp />
            }
          />
          <Route path="/signout" component={Accueil} />
          <Route path="/checkout" component={PageCheckout} />
        </Switch>
      </Layout>
    </Router>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
