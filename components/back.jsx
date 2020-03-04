import React from "react";

const Back = ({ link }) => (
  <a href={`${link}`} className="back__icon-holder">
    <img src="/static/images/arrow.svg" alt="arrow" className="back__icon" />
  </a>
);

export default Back;
