import React from "react";
import "./Button.css";

const Button = ({
  color = "blue",
  link,
  width = "auto",
  height = "auto",
  text = "Click Me",
}) => {
  return (
    // Button that links to external websites
    <div className="custom-button-container">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-button"
        style={{
          backgroundColor: color,
          width: width,
          height: height,
        }}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
