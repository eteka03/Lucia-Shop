import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cart.action";
import "../styles/components/collectionItem.scss";
import CustomButton from "./CustomButton";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price, id } = item;
  return (
    <div className="collection_item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="infos">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
