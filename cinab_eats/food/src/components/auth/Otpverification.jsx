import React, { useState, useRef, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import axios from "axios";
import { ResetPassword } from ".."; // Make sure you provide the correct import path

function OTPVerification({ email }) {
  // State variables
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [newOtp, setNewOtp] = useState("");
  const [resendEnabled, setResendEnabled] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const [isReseting, setIsReseting] = useState(false);
  const [isverifying, setIsverifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false); // Initialize as false
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Handle OTP input change
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

  // Handle Resend OTP Click
  const handleResendClick = async (e) => {
    setIsReseting(true);
    e.preventDefault();
    try {
      await axios.post("https://hilssourcecenter.onrender.com/v1/forget", {
        email,
      });
      setResendEnabled(false);
      setVerificationStatus("Verification resend successful!");
      setCountdown(60);
    } catch (err) {
      console.log(err);
      setIsReseting(false);
    } finally {
      setIsReseting(false);
    }
  };

  // Handle Verification Submit
  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setIsverifying(true);
    const otpCode = otp.join("");
    setNewOtp(otpCode);
    try {
      await axios.post("https://hilssourcecenter.onrender.com/v1/verify-otp", {
        otp: otpCode,
      });
      setResendEnabled(false);
      setVerificationStatus("Verification successful!");
      setShowNewPassword(true); // Set showNewPassword to true after successful verification
    } catch (err) {
      setVerificationStatus("Verification failed. Please try again.");
      setIsverifying(false);
    } finally {
      setIsverifying(false);
    }
  };

  // Countdown timer effect
  useEffect(() => {
    let countdownInterval;
    if (!resendEnabled && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResendEnabled(true);
      clearInterval(countdownInterval);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, resendEnabled]);

  return (
    <>
      {showNewPassword ? (
        <ResetPassword otp={newOtp} /> // Render the ResetPassword component when showNewPassword is true
      ) : (
        <div className="relative flex h-screen flex-col items-center overflow-hidden bg-gray-50 py-12">
          <div className="relative bg-blue-980 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl text-yellow-500">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>
                  We have sent a code to your email{" "}
                  <span className="text-yellow-500">{email}</span>
                </p>
              </div>
            </div>
            <div className="flex mt-4 justify-center">
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
            <div className="text-center mt-4 items-center">
              {resendEnabled ? (
                <a
                  href="#resend otp"
                  onClick={handleResendClick}
                  className="text-blue-500 hover:underline"
                >
                  {isReseting ? <span>Resending...</span> : " Resend OTP"}
                </a>
              ) : (
                <p>Resend OTP in {countdown} seconds</p>
              )}
            </div>
            <div className="text-center items-center">
              <Button
                onClick={handleVerificationSubmit}
                type="button"
                className="bg-blue-500 items-center text-center hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
              >
                {isverifying ? <span>Verifying...</span> : "Verify OTP"}
              </Button>
            </div>
            {verificationStatus && (
              <div className="text-center mt-2 text-red-500">
                <Alert>{verificationStatus}</Alert>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default OTPVerification;
