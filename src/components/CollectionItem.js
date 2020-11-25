import React from "react";
import "../styles/components/collectionItem.scss";

const CollectionItem = ({ imageUrl, name, price, id }) => {
  return (
    <div className="collection_item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="infos">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
