import React from "react";

const Icons = ({link, icon}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: "0 10px" }}
    >
      <i
        className={icon}
        style={{ color: "#fff", fontSize: "24px" }}
      ></i>
    </a>
  );
};

export default Icons;
