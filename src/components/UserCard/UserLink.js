import React from "react";

const UserLink = ({ background, text, link, icon,color }) => {
  return (
    <a
      href={link}
      style={{
        backgroundImage: `${background}`,
        backgroundSize: "cover",
        color: color,
        padding: "20px 10px",
        fontSize: "24px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "8px",
        display: "inline-block",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)", 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(255, 255, 255, 0.3)"; 
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 3px rgba(255, 255, 255, 0.5)"; 
      }}
    >
      <i className={icon} style={{ marginRight: "8px" }}></i>
      {text}
    </a>
  );
};

export default UserLink;
