import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function EmailVerification({ email }) {
  const [timerCount, setTimer] = useState(60);
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("            https://hilssourcecenter.onrender.com/send_recovery_email", {
        email,
      })
      .then(() => {
        setDisable(true);
        alert("A new OTP has been sent to your email.");
        setTimer(60);
      })
      .catch(console.log);
  }
  console.log(otp);
  function verifyOTP() {
    if (disable) return;
    axios
      .post("            https://hilssourcecenter.onrender.com/verify", {
        otp,
        email,
      })
      .then(() => {
        setDisable(true);
        alert("Verification successful.");
        setTimer(60);
      })
      .catch(console.log);
  }
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount <= 1) {
          clearInterval(interval);
          setDisable(false);
        }
        return lastTimerCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [disable]);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Auto-focus the next input field or the previous one if backspace is pressed
      if (value === "" && index > 0) {
        inputRefs[index - 1].current.focus();
      } else if (index < 3 && value.length === 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const isResendDisabled = disable ? "gray" : "blue";
  const resendCursor = disable ? "not-allowed" : "pointer";
  const resendTextDecoration = disable ? "none" : "underline";

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-6">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-col space-y-5">
                <div className="flex mt-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-16 h-10 px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
                      value={digit}
                      onChange={(e) => handleOTPChange(e, index)}
                      maxLength="1"
                      ref={inputRefs[index]}
                    />
                  ))}
                </div>

                <div>
                  <button
                    className={`flex items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 text-white text-sm shadow-sm ${isResendDisabled}`}
                    onClick={verifyOTP}
                  >
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive the code?</p>{" "}
                  <a
                    className={`flex items-center text-blue-600`}
                    href="#"
                    onClick={resendOTP}
                    style={{
                      cursor: resendCursor,
                      textDecoration: resendTextDecoration,
                    }}
                  >
                    Resend
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
