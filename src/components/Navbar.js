import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import s from "../img/icon.png";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar container navbar-expand-lg">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            <img src={s} width="50" />
            <span
              style={{ marginLeft: "10px", fontSize: "25px", color: "white" }}
            >
              ToDoList
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
