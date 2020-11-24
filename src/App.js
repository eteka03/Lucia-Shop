import React from "react";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";

export const Store = React.createContext();

export default function App() {
  return (
    <Store.Provider>
      <Layout>
        <Accueil />
      </Layout>
    </Store.Provider>
  );
}
