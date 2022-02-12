import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__links">
        <Link to="/students">Студенты</Link>
        <Link to="/companies">Компании</Link>
        <Link to="/events">События</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </div>
  );
};

export default Header;
