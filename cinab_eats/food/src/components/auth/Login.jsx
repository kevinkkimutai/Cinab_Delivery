import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { VerificationComponent } from "..";
import {  Button } from "react-bootstrap";
import { setCredentials, setCurrentUser } from "../../reducers/AuthReducers";
import Spinner from "react-bootstrap/Spinner";

// Add icon imports
import { FiEye, FiEyeOff } from "react-icons/fi";
// import Cookies from "js-cookie";
import axios from "axios";
import { useLoginMutation } from "../../actions/authActions";
import { toast } from "react-toastify";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReseting, setIsReseting] = useState(false);
  const [showResetPassword, setResetPassword] = useState(true); // State for password visibility

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const Email_REGEX = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
  // const Password_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{6,24}$/;

  const isValidEmail = (email) => Email_REGEX.test(email);
  // const isValidPassword = (password) => Password_REGEX.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("Please enter both email and password.");
        return;
      }

      if (!isValidEmail(email)) {
        toast.error("Invalid email format.");
        return;
      }

     

      const emailData = await login({ email, password }).unwrap();
      if (emailData.error) {
        toast.error("Internal Server Error");
      } else {
        setEmail("");
        setPassword("");
        dispatch(setCredentials(emailData));
        dispatch(setCurrentUser(emailData.user));
        const userRole = emailData.user.role;
        if (userRole === "Admin") {
          navigate("/admin/dashboard");
        } else if (userRole === "Admin2") {
          navigate("/admin/dashboard");
        } else if (userRole === "Supplier") {
          navigate("/supplier/dashboard/");
        } else if (userRole === "Buyer") {
          navigate("/buyer/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
      if (!err?.status) {
        toast.error("No Server Response");
      } else if (err.status === 404) {
        toast.error(err.data?.error || "User Not Found");
      } else if (err.status === 403) {
        toast.error(err.data.error);
      } else if (err.status === 401) {
        toast.error(err.data.error);
      } else {
        toast.error("Login Failed");
      }
      emailRef.current.focus();
    }
  };

  const handleResetPassword = async () => {
    setIsReseting(true);

    if (!email) {
      // Check if the email is empty
      toast.error("Please enter an email");
      setIsReseting(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://hilssourcecenter.onrender.com/v1/forget",
        {
          email,
        }
      );
      console.log(response);
      setResetPassword(false);
    } catch (err) {
      console.log(err);
      if (!err.response) {
        toast.error("No Server Response");
      } else if (err.response.status === 404) {
        toast.error(err.response.data.error || "User Not Found");
      } else if (err.response.status === 403) {
        toast.error(err.response.data.error);
      } else if (err.response.status === 401) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Failed to send Otp Code");
      }
      emailRef.current.focus();
    } finally {
      setIsReseting(false);
    }
  };

  return (
    <>
      {showResetPassword ? (
        <section className=" dark:bg-gray-900 w-full  flex justify-start items-start h-screen bg-yellow-50">
          <div className="flex  items-center w-full justify-center h-full">
            <div className="w-full text-yellow-500 bg-blue-980  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                      Your email
                    </label>
                    <ContactInputBox
                      type="email"
                      name="email"
                      ref={emailRef}
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium  dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <ContactInputBox
                        type={showPassword ? "text" : "password"}
                        name="password"
                        ref={passwordRef}
                        placeholder="*****************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* Add a button to toggle password visibility */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        {/* <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            /> */}
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className=" dark:text-gray-300"
                        >
                          {/* Remember me */}
                        </label>
                      </div>
                    </div>
                    <Button
                      onClick={handleResetPassword}
                      type="button"
                      className="text-sm font-medium  text-yellow-500 border-none dark:text-primary-500"
                    >
                      {isReseting ? (
                        <span>Checking Email...</span>
                      ) : (
                        "Forgot password?"
                      )}
                    </Button>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-980 font-bold py-2 px-4 rounded-full w-full disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner animation="border" variant="light" />
                    ) : (
                      "Login"
                    )}
                  </button>
                  <p className="text-sm font-bold  dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link to="/register" className=" text-yellow-600">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <VerificationComponent email={email} />
      )}
    </>
  );
};

const ContactInputBox = React.forwardRef(
  ({ type, placeholder, name, value, onChange }, ref) => {
    return (
      <div className="mb-4">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          ref={ref}
          required
          className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    );
  }
);

export default Login;
