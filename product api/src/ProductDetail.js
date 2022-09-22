import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

function ProductDetail() {
  let params = useParams();
  const navigate = useNavigate();

  const [Product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://62d929dc90883139359c47fe.mockapi.io/product/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProduct(res);
      });
  }, []);

  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <img src={Product.ProductImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{Product.ProductName}</h5>
          <h5 className="card-title">
            {Product.ProductCategory}
            <br />
            {Product.ProductPrice}
            <br />
            {Product.ProductDescription}
            <br />
          </h5>
          <div className="tr">
            <div className="td">
              <button
                onClick={() => {
                  fetch(
                    "https://62d929dc90883139359c47fe.mockapi.io/product/" +
                      params.id,
                    {
                      method: "DELETE",
                    }
                  ).then((res) => {
                    navigate("/Products");
                  });
                }}
                // style={{ border: "1px solid red", color: "red" }}
                className="red"
              >
                Delete
              </button>
            </div>
            <div className="td">
              <button
                onClick={() => {
                  navigate("/Products/edit/" + params.id);
                }}
                className="Green"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
