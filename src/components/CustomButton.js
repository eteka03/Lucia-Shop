import React from "react";
import "../styles/components/customButton.scss";

const CustomButton = ({ children, type, isGoogleSignIn, ...props }) => {
  return type === "submit" ? (
    <input type="submit" {...props} value={children} />
  ) : (
    <button
      className={`${isGoogleSignIn ? "googleSignIn" : ""} custom-button`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  type: "button",
  isGoogleSignIn: false,
};
export default CustomButton;
