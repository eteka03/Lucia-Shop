import React from "react";
import CollectionItem from "./CollectionItem";
import "../styles/components/Collection.scss";
import { connect } from "react-redux";

const Collection = ({ collection }) => {
  const { id, title, items } = collection;

  return (
    <div key={id} className="collection_container">
      <h2 className="title">{title}</h2>
      <div className="collection_liste">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default connect()(Collection);
