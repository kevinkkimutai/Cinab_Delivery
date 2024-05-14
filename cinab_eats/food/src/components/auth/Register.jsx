import React, { useRef, useState, useEffect } from "react";
import { BsCheckLg, BsInfoCircle } from "react-icons/bs";
import { Spinner } from "react-bootstrap";
import { TiTimes, TiEyeOutline, TiEye } from "react-icons/ti";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const USER_REGEX = /^[A-Za-z\s][A-Za-z\s'-]{1,30}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Email_REGEX = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
const REGISTER_URL = "https://hilssourcecenter.onrender.com/v1/register";

const Register = () => {
  const userRef = useRef();
  const pwdRef = useRef();
  const emailRef = useRef();
  const confirmPwdRef = useRef();
  const errRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [showMatchPwd, setShowMatchPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const isValidEmail = (email) => Email_REGEX.test(email);
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);
  useEffect(() => {
    setValidEmail(Email_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {}, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || pwd !== matchPwd) {
      toast.error("Invalid Entry");
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email format.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name: user, password: pwd, email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      toast.success("Email Sent to your email. Kindly verify");
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("Email Taken");
      } else {
        toast.error("Registration Failed");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();

  return (
    <section className=" dark:bg-gray-900 w-full  flex justify-start items-start h-screen bg-yellow-50">
      <div className="flex  items-center w-full justify-center h-full">
        <div className="w-full text-yellow-500 bg-blue-980  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {" "}
              {/* Username Input */}
              <div className="mb-4">
                <label htmlFor="username" className="flex items-center">
                  <span className="mr-2 text-yellow-500">Username</span>
                  <span className="justify-center text-center">
                    <BsCheckLg className={validName ? "valid" : "hide"} />
                    <TiTimes
                      className={validName || !user ? "hide" : "invalid"}
                    />
                  </span>
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="w-full  py-1 border rounded-lg focus:ring focus:ring-blue-400 text-gray-800"
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <BsInfoCircle />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
              {/* UserEmail Input */}
              <div className="mb-4">
                <label htmlFor="email" className="flex items-center">
                  <span className="mr-2 text-yellow-500">User Email</span>
                  <span className="justify-center text-center">
                    <BsCheckLg className={validEmail ? "valid" : "hide"} />
                    <TiTimes
                      className={validEmail || !email ? "hide" : "invalid"}
                    />
                  </span>
                </label>
                <input
                  type="text"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="w-full  py-1 border rounded-lg focus:ring focus:ring-blue-400 text-gray-800"
                />
              </div>
              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-yellow-500"
                >
                  Password:
                  <div className="relative">
                    <input
                      type={showPwd ? "text" : "password"}
                      name="password"
                      ref={pwdRef}
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400 text-gray-800"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd(!showPwd)}
                      className="absolute right-2 top-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      {showPwd ? <TiEye /> : <TiEyeOutline />}
                    </button>
                  </div>
                  <p
                    id="pwdnote"
                    className={`text-sm ${
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }`}
                  >
                    <BsInfoCircle className="inline text-base text-red-500 mr-1" />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number, and
                    a special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </label>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm_pwd"
                  className="block text-sm font-medium text-yellow-500"
                >
                  Confirm Password:
                  <div className="relative">
                    <input
                      type={showMatchPwd ? "text" : "password"}
                      id="confirm_pwd"
                      ref={confirmPwdRef}
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400 text-gray-800"
                    />
                    <button
                      type="button"
                      onClick={() => setShowMatchPwd(!showMatchPwd)}
                      className="absolute right-2 top-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      {showMatchPwd ? <TiEye /> : <TiEyeOutline />}
                    </button>
                  </div>
                  <p
                    id="confirmnote"
                    className={`text-sm ${
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }`}
                  >
                    <BsInfoCircle className="inline text-base text-red-500 mr-1" />
                    Must match the first password input field.
                  </p>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-980 py-2 rounded-lg transition-colors"
                disabled={!validName || !validPwd || !validMatch || isLoading}
              >
                {isLoading ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
