const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Op } = require("sequelize"); // Import the Op object from Sequelize
require("dotenv").config();
const { User, Token, sequelize } = require("../models");

const crypto = require("crypto");
const {
  sendEmails,
  sendingEmails,
} = require("../middleware/Verification");
function generateOTP() {
  const min = 1000; // Minimum 4-digit number
  const max = 9999; // Maximum 4-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const driverController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, email, password, contact } = req.body;
      const imageFile = req.file;

      let ImagePath = null; // Default to null
      if (imageFile) {
        ImagePath = `${API}/uploads/${imageFile.filename}`;
      }
      // Check if email already exists
      const duplicateUser = await User.findOne({ where: { email } });
      if (duplicateUser) {
        return res.status(409).json({ error: "Email already used" });
      }

      // Extract last 9 digits of the contact number
      const lastNineDigits = contact.slice(-9);

      // Check if contact already exists by comparing last 9 digits
      const duplicateAdminContact = await User.findOne({
        where: sequelize.where(sequelize.fn('right', sequelize.col('contact'), 9), lastNineDigits)
      });
      if (duplicateAdminContact) {
        return res.status(409).json({ error: "Contact already used" });
      }


      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user with hashed password
      const user = await User.create({
        firstName,
        lastName,
        email,
        image: ImagePath,
        password: hashedPassword, // Use the hashed password
        contact,
        role: "Driver",
        refreshToken: null, // Assuming refreshToken starts as null
      });

      // Generate a verification token and send verification email
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 5);
      const setToken = await Token.create({
        userId: user.id,
        expiresAt: expirationTime,
        token: crypto.randomBytes(16).toString("hex"),
      });
      const username = user.name;
      const to = user.email;
      const subject = "Account Verification";
      const verificationLink = `https://mightyflex.onrender.com/v1/verify-email/${user.id}/${setToken.token}`;
      if (setToken) {
        sendEmails({ to, verificationLink, subject, username });
      } else {
        return res.status(400).send("Token not created");
      }

      return res.status(201).send(user); 
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error: "Failed to create user" });
    }
  },


  resendVerificationLink: async (req, res) => {
    try {
      // Retrieve the user ID from the cookie
      const userId = req.cookies.userId;
      console.log(userId);
      if (!userId) {
        return res.status(404).json({ error: "User not found" });
      }

      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Generate a new verification token and set it in the database
      const verificationToken = crypto.randomBytes(16).toString("hex");

      // Calculate the new expiration time (12 minutes from now)
      const tokenExpiration = new Date();
      tokenExpiration.setMinutes(tokenExpiration.getMinutes() + 12);

      // Find the existing token and update it or delete it
      let existingToken = await Token.findOne({ where: { userId } });
      if (existingToken) {
        await existingToken.update({
          token: verificationToken,
          expiresAt: tokenExpiration,
        });
      } else {
        await Token.create({
          userId,
          token: verificationToken,
          expiresAt: tokenExpiration,
        });
      }
      const username = user.name;
      const to = user.email;
      const subject = "Resend Account Verification Link";
      const verificationLink = `            https://mightyflex.onrender.com/v1/verify-email/${userId}/${verificationToken}`;
      // Send the new verification link to the user's email

      await sendEmails({ to, verificationLink, subject, username });

      // Pass the success message to the EJS template
      const successMessage = "Verification link resent successfully.";

      // Render the EJS template with the success message
      return res.render("resend-verifications", { successMessage });
    } catch (error) {
      return res.status(500).send("Failed to resend verification link");
    }
  },

  verifyEmail: async (req, res) => {
    try {
      const { id, token } = req.params;
      const now = new Date();

      const usertoken = await Token.findOne({
        where: {
          userId: id,
          token,
          expiresAt: { [Op.gt]: now }, // Check if the token has not expired (greater than current time)
        },
      });
      // Set the user ID in a cookie
      res.cookie("userId", id, { maxAge: 86400000, httpOnly: true });

      if (!usertoken) {
        return res.render("resend-verification");
      } else {
        const user = await User.findOne({ where: { id } });
        if (!user) {
          return res
            .status(401)
            .redirect("https://mightyflexs.vercel.app/register");
        } else if (user.isVerified) {
          return res
            .status(200)
            .redirect("https://mightyflexs.vercel.app/login");
        } else {
          user.isVerified = true;
          await user.save();

          // Remove the verification token from the database after successful verification
          await usertoken.destroy();

          return res
            .status(200)
            .redirect("https://mightyflexs.vercel.app/login");
        }
      }
    } catch (error) {
      return res.status(500).send({ error: "Failed to verify email" });
    }
  },
  //
  VerifyOtp: async (req, res) => {
    try {
      const { otp } = req.body;
      if (!otp) {
        return res.status(400).json({ error: "Email is required" });
      }

      const user = await User.findOne({ where: { otp } });

      if (!user) {
        return res.status(404).json({ error: "OTP not found" });
      }
      return res.status(200).json({ message: "OTP verified successfully." });
    } catch (error) {
      return res.status(500).send({ error: "Failed to verified OTP" });
    }
  },

  //
  ResetPassword: async (req, res) => {
    try {
      const { otp, newPassword } = req.body;

      if (!otp) {
        return res.status(400).json({ error: "OTP is required" }); // Changed "Email is required" to "OTP is required"
      }
      if (!newPassword) {
        return res.status(400).json({ error: "Enter New Password" }); // Changed "Email is required" to "OTP is required"
      }
      // const user = await User.findOne({ where: { otp } );
      const user = await User.findOne({ where: { otp } });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // hash the newPassword before storing it in your database for security

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password attribute with the hashed password
      user.password = hashedPassword;

      // Set the OTP attribute to null
      user.otp = null;

      // Save the changes to the user
      await user.save();

      return res.status(200).json({ message: "Password successfully reset." });
    } catch (error) {
      return res.status(500).send({ error: "Failed to reset the password" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      // Use the User model to find all users
      const users = await User.findAll({
        order: [["id", "DESC"]],
      });

      // Return the list of users in a JSON response
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve users" });
    }
  },

  forgetPassword: async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: "Email not found" });
      }

      // Generate a new 4-digit OTP
      const otp = generateOTP(); // You need to implement the `generateOTP` function

      user.otp = otp; // Update the 'otp' field with the new OTP
      await user.save();

      // Send the OTP to the user's email
      sendingEmails({
        from: "no-reply@example.com",
        to: email,
        subject: "OTP for Password Reset",
        text: `Hello, ${user.name} Your OTP is: ${otp}`,
      });

      return res.status(200).json({ message: "OTP sent successfully." });
    } catch (error) {
      return res.status(500).send({ error: "Failed to send OTP" });
    }
  },

  // Update User

  updateUser: async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password, contact, role, isVerified } = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.update({ firstName, lastName, email, password, contact, role, isVerified });
      res.json({ message: "User updated successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      return res.status(200);
    } catch (err) {
      res.status(500).json({ error: "Failled To Delete User" });
    }
  },

  createUser: async (userDataInfo, password) => {
    try {
      // Create the account'
      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 12);

      const user = await User.create(userDataInfo);

      if (!user) {
        throw new Error("User not created");
      }

      const expirationTimeISO = expirationTime.toISOString();

      // // Call the sendSecretCode function and await its completion
      // await sendSecretCode({ user, password });
      await sendingEmails({
        from: "no-reply@example.com",
        to: `${user.email}`,
        subject: "Your Login Details",
        text: `Dear ${user.name},
      
      Thank you for registering with Mightyflex. Here are your login details:
      
      Username: ${user.email}
      Password: ${password}
      
      For security reasons, we recommend changing your password after the initial login. You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.
      
      If you have any questions or need assistance, feel free to contact our support team.
      
      Best regards,
      Mightyflex Support`,
      });

      const setToken = await Token.create({
        userId: user.id,
        expiresAt: expirationTimeISO,
        token: crypto.randomBytes(16).toString("hex"),
      });

      if (!setToken) {
        throw new Error("Token not created");
      }

      await sendingEmails({
        from: "no-reply@example.com",
        to: `${user.email}`,
        subject: "Account Verification Link",
        text: `Hello, ${user.name} Please verify your email by clicking this link:             https://mightyflex.onrender.com/v1/verify-email/${user.id}/${setToken.token}`,
      });

      // Return the created user
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating account");
    }
  },

  // Contact

  contact: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const emailData = {
        name,
        email,
        message,
      };
      await sendingEmails({
        from: "no-reply@example.com",
        to: "omanyohillary@yahoo.com",
        subject: `Mightyflex faqs from ${emailData.name}`,
        text: `Sender's Email: ${emailData.email}\n\n${emailData.message}`,
      });
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Interenal serev error" });
    }
  },
  // AUTHETICATION
  authenticate: async (req, res) => {
    try {
      const { emailOrContact, password } = req.body;
      let user;

      // Check if the input is an email or a contact number
      if (emailOrContact.includes('@')) {
        // Input is an email
        user = await User.findOne({
          where: { email: emailOrContact },
        });
      } else {
        // Input is a contact number
        user = await User.findOne({
          where: { contact: emailOrContact },
        });
      }

      // Check if user Exists
      if (!user) {
        return res.status(404).send({ error: "User not found." });
      }

      // Check password validity
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // Assign Access and Refresh Tokens
      const accessToken = jwt.sign(
        {
          email: user.email,
          id: user.id,
          name: user.firstName,
        },
        process.env.SECRET_KEY,
        { algorithm: "HS256", expiresIn: "20m" }
      );

      const refreshToken = jwt.sign(
        {
          email: user.email,
          id: user.id,
          name: user.firstName,
        },
        process.env.REFRESH_KEY,
        { algorithm: "HS256", expiresIn: "1d" }
      );
      user.refreshToken = refreshToken;
      await user.save();

      // Set refresh token as a cookie
      res.cookie("jwt", refreshToken, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        secure: true,
        httpOnly: true,
        sameSite: "none",
      });

      // Return user data and tokens
      const { id, email, firstName, lastName, role } = user;
      return res.status(201).json({
        token: accessToken,
        refreshToken: refreshToken,
        user: {
          id,
          email,
          firstName,
          lastName,
          role,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Login failed" });
    }
  },


  logout: async (req, res) => {
    try {
      const id = req.user.id;
      console.log(id);
      // Assuming you store the user's information in the request object
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      // Invalidate the user's refresh token
      user.refreshToken = null;
      await user.save();
      // Clear the refresh token cookie on the client side
      res.clearCookie("jwt");
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to logout" });
    }
  },
};

module.exports = driverController;
