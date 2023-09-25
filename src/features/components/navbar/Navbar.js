import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigation = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Category",
      link: "/category",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
  ];
  return (
    <div className="container">
      <div className="main-nav flex">
        <div className="company-logo">
          <NavLink to="/" className="company-logo-link">
            <span className="left-text">Electro</span>
            <span className="right-text">Nex</span>
          </NavLink>
        </div>
        <div className="middle-nav-links">
          <ul className="flex">
            {navigation.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link} className="nav-link-item">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-nav-links">
          <ul className="flex">
            <li>
              <NavLink to="/register" className="nav-link-item">
                <button className="nav-signin-btn">Sign In</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className="nav-link-item">
                <i className="fa-solid fa-magnifying-glass"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="nav-link-item">
                <i className="fa-solid fa-circle-user"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link-item">
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
