import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";
function Layout() {
  return (
    <>
      <Header />
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;