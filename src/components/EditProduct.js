import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./sittingProduct.css";
import Swal from "sweetalert2";
export default function EditProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [endData, setEndData] = useState("");
  const { productID } = useParams();
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/products/${productID}`, {
        title,
        description,
        data,
        endData,
      })
      .then((data) => {
        console.log(data);
      });
  };
  const success = () => {
    Swal.fire({
      title:
        "<h1 style='background: -webkit-linear-gradient(45deg, #0046dd, #00ce78 80%);-webkit-background-clip: text; -webkit-text-fill-color: transparent; '>" +
        "Done" +
        "</h1>",
      icon: "success",
    });
  };
  return (
    <div className="container">
      <div className="window1">
        <form className="for_wind" onSubmit={formSubmit}>
          <center>
            <h1 className="gradient-text h1">Edit Task</h1>
            <Link style={{ paddingRight: "10px" }} to="/" className="icon">
              <i class="fa-solid fa-rotate-left"></i>
            </Link>
          </center>
          <div className="form2">
            <div className="cont container">
              <div className="form__group field">
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="form__field"
                  placeholder="Title"
                  name="name"
                  id="name"
                />
                <label htmlFor="name" className="form__label">
                  Title
                </label>
              </div>
              <div className="location form__group">
                <textarea
                  type="text"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="textarea"
                  className="border_rad textarea"
                  name="message"
                  rows="2"
                  cols="30"
                  placeholder="Discrption"
                ></textarea>
                <label htmlFor="textarea" className="textarea_label">
                  Discrption
                </label>
              </div>
              <div>
                <span className="span1">Start Date</span>
                <input
                  className="date"
                  type="datetime-local"
                  onChange={(e) => {
                    setData(e.target.value);
                  }}
                />
              </div>
              <div>
                <span className="span1">End Date</span>
                <input
                  className="date"
                  style={{ marginLeft: "10px" }}
                  type="datetime-local"
                  onChange={(e) => {
                    setEndData(e.target.value);
                  }}
                />
              </div>

              <button
                onClick={() => success()}
                className="label submit_label"
                type="submit"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
