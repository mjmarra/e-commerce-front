import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import globalUrl from "../../utils/url";

const CategoryCreateForm = ({ setCategories, setSearch, closeModal }) => {
  const token = useSelector((store) => store.user.token);
  const [name, setName] = useState("");
  const [banner, setBanner] = useState(
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);

    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${globalUrl}/api/v1/categories`,
      data: formData,
    })
      .then((res) => {
        setCategories((categories) => [...categories, res.data]);
        setSearch(null);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-wrapper">
      <h4 className="text-center">Insert new category</h4>
      <hr />
      <form
        id="form-signUp"
        className="form-group m-auto"
        onSubmit={handleSubmit}
      >
        <label for="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          className="form-control"
          value={name}
          id="name"
          type="text"
        />

        <button className="btn btn-modal btn-block mt-4 mb-3" type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoryCreateForm;
