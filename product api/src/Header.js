import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="logo">
          <img src="https://darshan.ac.in/Content/media/DU_Logo.svg" alt="" />
        </div>
        <div className="main">
          <div className="Link">
            <Link to="./">Home</Link>{" "}
          </div>
          <div className="Link">
            <Link to="./Products">All products</Link>
          </div>
          <div className="Link">
            <Link to="./Products/add">Add Products</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
