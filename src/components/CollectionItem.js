import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cart.action";
import "../styles/components/collectionItem.scss";
import CustomButton from "./CustomButton";

const CollectionItem = ({ item, addItem }) => {
  const product = item ? (
    <div className="collection_item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="infos">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  ) : (
    <h5>Loading...</h5>
  );

  return product;
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
