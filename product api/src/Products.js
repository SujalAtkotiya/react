import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";

function Products() {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://62d929dc90883139359c47fe.mockapi.io/product")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProduct(res);
      });
  }, []);

  const foramtedProduct = Product.map((pro) => {
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <div className="ProductImg" style={{ height: "30vh" }}>
            <img
              src={pro.ProductImage}
              className="card-img-top rounded mx-auto d-block"
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{pro.ProductName}</h5>
            <p className="card-text">
              {pro.ProductPrice}
              <br /> {pro.ProductCategory}
              <br /> {pro.ProductDescription}
            </p>
            <Link to={"../Products/" + pro.id} className="btn btn-primary">
              All Details
            </Link>
          </div>
        </div>
      </>
    );
  });

  return foramtedProduct;
}

export default Products;
