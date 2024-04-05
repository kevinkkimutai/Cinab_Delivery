import { useEffect, useState } from "react"; 
import { selectCurrentUser } from "../../reducers/AuthReducers";
import { useSelector } from "react-redux";


const Sidebar = ({ handleLogout }) => {
  const currentUser = useSelector(selectCurrentUser);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [role, setRole] = useState();
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);
  const [restaurantDropdownOpen, setRestaurantDropdownOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setfirstName(currentUser.firstName);
      setlastName(currentUser.lastName);
      setRole(currentUser.role);
    }
  }, [currentUser]);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    const closeSidebar = () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); // Call the function (optional)
    };

    const openSidebar = () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); // Call the function (optional)
    };

    const menuBtnChange = () => {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    closeBtn.addEventListener("click", closeSidebar);
    searchBtn.addEventListener("click", openSidebar);

    return () => {
      closeBtn.removeEventListener("click", closeSidebar);
      searchBtn.removeEventListener("click", openSidebar);
    };
  }, []);

  const toggleOrderDropdown = () => {
    setOrderDropdownOpen(!orderDropdownOpen);
    
  };
  const toggleRestaurantDropdown = () => {
    setRestaurantDropdownOpen(!restaurantDropdownOpen);
    
  };
  return (
   <div className="sidebar">
  <div className="logo-details">
  <img src="/logo.png" className="h-12 icon rounded-full" alt="Logo"/>
    <div className="logo_name self-center text-2xl ms-2 font-semibold uppercase whitespace-nowrap dark:text-white">IdeaKode</div>
    <i className='bx bx-menu' id="btn"></i>
  </div>
  <ul className="nav-list">
    <li>
      <i className='bx bx-search'></i>
      <input type="text" placeholder="Search..." />
      <span className="tooltip">Search</span>
    </li>
    <li>
      <a href="/">
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Dashboard</span>
      </a>
      <span className="tooltip">Dashboard</span>
    </li>
    <li>
      <a href="/product/all_drivers">
        <i className='bx bx-user'></i>
        <span className="links_name">Drivers</span>
      </a>
      <span className="tooltip">Drivers</span>
    </li>
    <li id="restaurant" className={restaurantDropdownOpen ? " rounded-t-lg border border-white" : ""}>
<a onClick={toggleRestaurantDropdown} >
  <i className='bx bxs-cart-alt'></i>
  <span className="links_name">Restaurant  </span>
</a>
<span className="tooltip">Restaurant</span>
</li>
{restaurantDropdownOpen && (
      <ul className="bg-gray-950 rounded-b-lg border border-t-0 border-white -mt-2 drops">
        <li className="p-">
          <a href="/product/restaurants">
          <i className='bx bx-cart-alt' style={{color: "blue"}}></i>
            <span className="links_name">All Restaurants</span>
          </a>
          <span className="tooltip">All Restaurants</span>
        </li>
        <li className="p-">
          <a href="/product/pending_restaurants">
          <i className='bx bx-cart-add' style={{color: "green"}} ></i>
            <span className="links_name">Pending Restaurants</span>
          </a>
          <span className="tooltip">Pending Restaurants</span>
        </li>
        <li className="">
          <a href="/product/rejected_restaurants">
          <i className='bx bx-cart-download' style={{color: "red"}} ></i>
            <span className="links_name">Rejected Restaurants</span>
          </a>
          <span className="tooltip">Rejected Restaurants</span>
        </li>
      </ul>
)}

    <li>
      <a href="/product/messages">
        <i className='bx bx-chat'></i>
        <span className="links_name">Messages</span>
      </a>
      <span className="tooltip">Messages</span>
    </li>
    <li>
      <a href="/">
        <i className='bx bx-pie-chart-alt-2'></i>
        <span className="links_name">Analytics</span>
      </a>
      <span className="tooltip">Analytics</span>
    </li>
    
    <li id="order" className={orderDropdownOpen ? " rounded-t-lg border border-white" : ""}>
      <a onClick={toggleOrderDropdown} >
        <i className='bx bxs-cart-alt'></i>
        <span className="links_name">Order  </span>
      </a>
      <span className="tooltip">Order</span>
    </li>
    {orderDropdownOpen && (
            <ul className="bg-gray-950 rounded-b-lg border border-t-0 border-white -mt-2 drops">
              <li className="p-">
                <a href="/product/orders">
                <i className='bx bx-cart-alt' style={{color: "blue"}}></i>
                  <span className="links_name">All Orders</span>
                </a>
                <span className="tooltip">All Orders</span>
              </li>
              <li className="p-">
                <a href="/product/pending_orders">
                <i className='bx bx-cart-add' style={{color: "green"}} ></i>
                  <span className="links_name">Pending Orders</span>
                </a>
                <span className="tooltip">Pending Orders</span>
              </li>
              <li className="">
                <a href="/product/rejected_orders">
                <i className='bx bx-cart-download' style={{color: "red"}} ></i>
                  <span className="links_name">Rejected Orders</span>
                </a>
                <span className="tooltip">Rejected Orders</span>
              </li>
            </ul>
    )}
<li>
      <a href="/product/saved">
        <i className='bx bx-heart'></i>
        <span className="links_name">Saved</span>
      </a>
      <span className="tooltip">Saved</span>
    </li>
    <li>
      <a href="/product/settings">
        <i className='bx bx-cog'></i>
        <span className="links_name">Setting</span>
      </a>
      <span className="tooltip">Setting</span>
    </li>
    <li className="profile">
      <div className="profile-details">
        <img src='/logo.png'  className="h-8" alt="profileImg" />
        <div className="name_job">
        <div className="name">{firstName} {lastName}</div>
          <div className="job">{role}</div>
        </div>
      </div>
      <i className='bx bx-log-out' id="log_out" onClick={handleLogout}></i>
    </li>
  </ul>
</div>


  )
}
export default Sidebar;