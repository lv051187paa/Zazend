import React from "react";

import "./preloader.scss";

const Preloader = props => (
  <div className="preloader">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Preloader;
