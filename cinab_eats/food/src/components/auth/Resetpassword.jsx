import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResetPassword({ otp }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isReseting, setIsReseting] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    setIsReseting(true);
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Check if the password meets the length requirement
      if (newPassword.length >= 6 && newPassword.length <= 24) {
        try {
          await axios.put("https://hilssourcecenter.onrender.com/v1/forget-password", {
            otp: otp,
            newPassword: newPassword,
          });
          window.location.reload();
        } catch (err) {
          setIsReseting(false);
          setErrMsg("Password reset failed. Please try again.");
        } finally {
          setIsReseting(false);
        }
      } else {
        setErrMsg("Password must be between 8 and 24 characters.");
        setIsReseting(false)
      }
    } else {
      setErrMsg("Passwords do not match. Please try again.");
      setIsReseting(false)

    }
  };

  return (
    <div className="relative flex h-screen flex-col items-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-blue-980 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="font-semibold text-3xl text-yellow-500">
            <p>Reset Password</p>
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Form.Group>
          <Form.Group as={Row} className="justify-between mt-2">
            <Col className="items-center flex ">
              <Form.Check type="checkbox" onChange={toggleShowPassword} />
              <h1 className="text-gray-500 ml-2">Show password</h1>
            </Col>
          </Form.Group>
          <div className="flex justify-center items-center w-full mb-2">
            <Button
              type="submit"
              className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold px-12 rounded-full"
            >
              {isReseting ? <span>Sending...</span> : "Reset Password"}
            </Button>
          </div>

          {errMsg && <Alert variant="danger">{errMsg}</Alert>}
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;
