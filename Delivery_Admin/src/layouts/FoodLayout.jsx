import { Outlet } from "react-router-dom";
import { FoodNavBar, FoodSidebar} from "../components";


const FoodLayout = ({ handleLogout }) => {
  return (
    <div>
      <>
      <FoodSidebar handleLogout={handleLogout}/>
      <section className="home-section">
      <FoodNavBar/>
      <Outlet />
      </section>
    </>
    
    </div>
  );
};

export default FoodLayout;
