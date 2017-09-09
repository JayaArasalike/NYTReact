import React from "react";
import Footer from "./common/Footer";

const Main = props => (
  <div>
    {props.children}
    <Footer />
  </div>
);

export default Main;
