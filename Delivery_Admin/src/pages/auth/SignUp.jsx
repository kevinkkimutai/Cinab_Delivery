import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../reducers/AuthReducers";
import { useSelector } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    // If user is logged in, redirect to dashboard
    if (currentUser) {
      navigate("/product/dashboard");
    }
  }, [currentUser]);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contact: "",
    role: "",
    password: "",
  });
  const [createUser] = useRegisterMutation();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUser(formData);
      if (!res.data) {
        toast.error(res.error.data.error);
      } else {
        toast.success("Admin created Successfully");
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          contact: "",
          role: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <section className="bg-blue-50 ">
      <div className="flex flex-col items-center justify-center px-2 mx-auto h-screen md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center text-center mb-2 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-14 h-14  rounded-full border border-gray-950"
            src="/logo.png"
            alt="logo"
          />
        </a>
        <a
          href="/"
          className="flex items-center text-center mb-2 text-2xl font-semibold text-gray-900"
        >
          Cinab Delivery Admin
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
          <div className="p-4 space-y-2 md:space-y-2 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-2 md:space-y-2" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <div className="w-2/3">
                  <label
                    htmlFor="email"
                    className="block  mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 "
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className="w-1/2"> 
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleFormChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 "
                  >
                    <option className="text-gray-900 bg-gray-300" value="">
                      Choose a Role
                    </option>
                    <option value="Super_Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                <div>
                  <label
                    htmlFor="firstNName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your firstname
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 "
                    placeholder="Kelvin"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your lastname
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 "
                    placeholder="Kimutai"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Contact
                </label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={handleFormChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 "
                  placeholder="+254718888628"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  placeholder="••••••••"
                  className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full  text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-800">
                Don’t have an account yet?{" "}
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
