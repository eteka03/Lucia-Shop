import React, { useState } from "react";
import SHOP_DATA from "../datas/shop.data";
import Collection from "../components/Collection";
import "../styles/pages/shop.scss";

const PageShop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="page_shop conteneur_large container-fluid">
      <h1 className="text-capitalize titre">Collections</h1>
      <div className="shop_list">
        {collections.map((collection) => {
          return <Collection key={collection.id} {...collection} />;
        })}
      </div>
    </div>
  );
};

export default PageShop;
