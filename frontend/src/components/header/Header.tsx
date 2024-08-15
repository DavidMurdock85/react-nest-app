import React from "react";
import Nav from "./navigation/Nav";
import Banner from "./banner/Banner";

const Header: React.FC = () => {
  return (
    <header>
      <Banner />
      <Nav />
    </header>
  );
};

export default Header;
