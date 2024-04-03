import { Outlet } from "react-router-dom";
import { NavBar, Sidebar } from "../components";


const ProductLayout = ({ handleLogout }) => {
  return (

    <>
      <Sidebar handleLogout={handleLogout}/>
      <section className="home-section">
      <NavBar/>
      <Outlet />
      </section>
    </>

  );
};

export default ProductLayout;
