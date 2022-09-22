import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Productsadd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://62d929dc90883139359c47fe.mockapi.io/product/" + params.id,
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <div className="addform-container">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.ProductName}
            placeholder="Enter product Name"
            onChange={(e) => {
              setData({ ...data, ProductName: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> Product Name..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.ProductImage}
            placeholder="Enter Image Link"
            onChange={(e) => {
              setData({ ...data, ProductImage: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> ProductImage Link..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.ProductCategory}
            placeholder="Enter category Name"
            onChange={(e) => {
              setData({ ...data, ProductCategory: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> ProductCategory...</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.ProductPrice}
            placeholder="Enter ProductPrice.."
            onChange={(e) => {
              setData({ ...data, ProductPrice: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> ProductPrice..</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="text"
            class="form-control"
            id="floatingPassword"
            value={data.ProductDescription}
            placeholder="Enter Description"
            onChange={(e) => {
              setData({ ...data, ProductDescription: e.target.value });
            }}
          ></input>
          <label for="floatingPassword"> ProductDescription..</label>
        </div>
        <button
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://62d929dc90883139359c47fe.mockapi.io/product/" +
                  params.id,
                {
                  method: "PUT",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ).then(() => {
                navigate("/Products");
              });
            } else {
              fetch("https://62d929dc90883139359c47fe.mockapi.io/product", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(() => {
                navigate("/Products");
              });
            }
          }}
        >
          {params.id > 0 && "Edit  "}
          {!(params.id > 0) && "Add  "}
          Laptop
        </button>
      </div>
    </>
  );
}
