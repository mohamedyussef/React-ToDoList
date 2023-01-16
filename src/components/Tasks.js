import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import "./Tasks.css";
import Swal from "sweetalert2";

export default function Tasks() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  });
  const deleteProduct = (productId) => {
    fetch(`http://localhost:9000/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((product) => {
        return console.log(product);
      });
  };
  const sweet = (productID) =>
    Swal.fire({
      title:
        "<h1 style='background: -webkit-linear-gradient(45deg, #0046dd, #00ce78 80%);-webkit-background-clip: text; -webkit-text-fill-color: transparent; '>" +
        "Are You Sure To Delete This Task" +
        "</h1>",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((data) => {
      if (data.isConfirmed) {
        deleteProduct(productID);
      }
    });
  return (
    <div className="container Contain">
      <div className="title">
        <center>
          <span>All Tasks</span>
          <Link to="AddProduct" className="icon">
            <i className="fa-solid fa-circle-plus"></i>
          </Link>
        </center>
      </div>
      <div className="table1">
        {product.map((e) => {
          return (
            <div key={e.id} className="window1">
              <div className="top container">
                <div className="head_title">
                  <div className="tit">{e.title}</div>
                  <div className="time">
                    <div>begin {e.data}</div>
                    <div>end {e.endData}</div>
                  </div>
                </div>
                <div>
                  <Link
                    style={{ marginRight: "10px" }}
                    to={`/EditProduct/${e.id}`}
                  >
                    <i className="fa-solid fa-pen-to-square ico"></i>
                  </Link>
                  <i
                    onClick={() => {
                      sweet(e.id);
                    }}
                    className="fa-solid fa-trash-can ico"
                  ></i>
                </div>
              </div>
              <div className="bottom container">
                <p className="par">{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
