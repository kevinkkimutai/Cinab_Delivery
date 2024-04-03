import { useRef, useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setCredentials, setCurrentUser } from "../../reducers/AuthReducers";
import { useLoginMutation } from "../../actions/authActions";

import { toast } from "react-toastify";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    // If user is logged in, redirect to dashboard
    if (currentUser) {
      navigate('/product/dashboard');
    }
  }, [currentUser]); 

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const Email_REGEX = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
  // const Password_REGEX = /^\d{6,24}$/;

  const isValidEmail = (email) => Email_REGEX.test(email);
  // const isValidPassword = (password) => Password_REGEX.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        toast.error("Please enter valid email and password.");
        return;
      }

      if (!isValidEmail(email)) {
        toast.error("Invalid email format.");
        return;
      }

      const emailData = await login({ email, password }).unwrap();
      console.table(emailData);
      if (emailData.error) {
        toast.error("Internal Server Error");
      } else {
        setEmail("");
        setPassword("");
        dispatch(setCredentials(emailData));
        dispatch(setCurrentUser(emailData.user));
        // dispatch(setRole("super_admin"));
      
        toast.success("Logged-in Successfully");
        navigate("/product/dashboard");
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
  return (
    <section className="bg-blue-50 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0">
        <a href="/" className="flex items-center text-center mb-2 text-2xl font-semibold text-gray-900">
            <img className="w-16 h-16 mr-2 rounded-full border border-gray-950" src="/logo.png" alt="logo"/>
          
        </a>
        <a href="/" className="flex items-center text-center mb-2 text-2xl font-semibold text-gray-900">
          Cinab Delivery Admin
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 "
                        ref={emailRef} value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        ref={passwordRef} value={password}
                        onChange={(e) => setPassword(e.target.value)} required=""/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300    border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="remember" className="text-gray-700 ">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    <p className="text-sm font-light text-gray-800 ">
                        Don’t have an account yet? <a href="/signup" className="font-medium text-blue-600 hover:underline">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login