
import { Routes, Route, useNavigate,  } from "react-router-dom";
import {
  AllDrivers,
  AllOrders,
  FoodDashboard,
  Login,
  NotFound,
  PendingOrders,
  ProductDashboard,
  RejectedOrders,
  Settings,
  SignUp,

} from "./pages";
import { logOut } from "./reducers/AuthReducers";
import RequireAuth from "./actions/requireAuth";

// import ForgetPassword from "./pages/Auth/ForgetPassword";
import { useDispatch } from "react-redux";
import ProductLayout from "./layouts/ProductLayout";
import FoodLayout from "./layouts/FoodLayout";


export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/login");
    window.location.reload(); // Refresh the page
  };

  return (

      <Routes>
        
        {/* auth section */}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>

          <Route index element={<Login />}  />
          <Route element={<RequireAuth />}>
  {/* other routes section */}
          <Route
            path="/product/*"
              element={<ProductLayout handleLogout={handleLogout} />}
            >
            <Route path="dashboard" element={<ProductDashboard />} />
            <Route path="all_drivers" element={<AllDrivers />} />
            <Route path="orders" element={<AllOrders />} />
            <Route path="pending_orders" element={<PendingOrders />} />
            <Route path="rejected_orders" element={<RejectedOrders />} />
            <Route path="settings" element={<Settings />} />
          </Route>

  {/* food routes section */}
          <Route
              path="/food/*"
              element={<FoodLayout handleLogout={handleLogout} />}
            >
            <Route path="dashboard" element={<FoodDashboard />} />
          </Route>
        </Route>

        {/* not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
}