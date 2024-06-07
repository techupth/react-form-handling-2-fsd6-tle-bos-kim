import { useState } from "react";

function ProductForm() {
  const [getUsename, setUser] = useState("");
  const [getUrl, setMyUrl] = useState("");
  const [getPrice, setPrice] = useState("");
  const [getDes, setDescrip] = useState("");
    
  const handleSubmit = () => {
    const data = {
      name: getUsename,
      imageurl: getUrl,
      showPrice: getPrice,
      Description: getDes,
    };
    alert(JSON.stringify(data));
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => setUser(event.target.value)}
            value={getUsename}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => setMyUrl(event.target.value)}
            value={getUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => setPrice(event.target.value)}
            value={getPrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => setDescrip(event.target.value)}
            value={getDes}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
