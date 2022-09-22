import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home_main">
        <div className="home_header">
          <h1>Desire Products</h1>
        </div>
        <div className="home_contant">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo quasi laborum illum itaque, minus quos. Nisi, asperiores. Harum
            dolor iusto suscipit ab eaque consequuntur pariatur quaerat
            assumenda sed quas!
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              navigate("/Products");
            }}
          >
            Go to all Products{" "}
          </button>
        </div>
      </div>
    </>
  );
}
