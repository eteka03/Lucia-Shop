import React from "react";
import "../styles/components/customButton.scss";

const CustomButton = ({
  children,
  inverted,
  type,
  isGoogleSignIn,
  ...props
}) => {
  return type === "submit" ? (
    <input type="submit" {...props} value={children} />
  ) : (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "googleSignIn" : ""
      } custom-button`}
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
  inverted: false,
};
export default CustomButton;
