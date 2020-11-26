import React from "react";
import "../styles/components/customButton.scss";

const CustomButton = ({ children, type, ...props }) => {
  return type === "submit" ? (
    <input type="submit" value={children} />
  ) : (
    <button className="custom-button">{children}</button>
  );
};

CustomButton.defaultProps = {};
export default CustomButton;
