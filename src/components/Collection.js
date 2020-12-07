import React from "react";
import CollectionItem from "./CollectionItem";
import "../styles/components/Collection.scss";

const Collection = ({ title, items }) => {
  return (
    <div className="collection_container">
      <h2 className="title">{title}</h2>
      <div className="collection_liste">
        {items.map((item) => {
          return (
            <CollectionItem key={item.id} item={item}>
              {item.name}
            </CollectionItem>
          );
        })}
      </div>
    </div>
  );
};
export default Collection;
