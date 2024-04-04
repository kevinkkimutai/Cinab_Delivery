const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Op } = require("sequelize"); // Import the Op object from Sequelize
require("dotenv").config();
const { Admin, Token, sequelize } = require("../models");

const crypto = require("crypto");
const {
    sendEmails,
    sendingEmails,
} = require("../middleware/Verification");
function generateOTP() {
    const min = 1000; // Minimum 4-digit number
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AdminController = {
    create: async (req, res) => {
        try {
            const { firstName, lastName, email, password, contact, role } = req.body;
            const imageFile = req.file;

            let ImagePath = null;
            if (imageFile) {
                ImagePath = `${API}/uploads/${imageFile.filename}`;
            }

            // Check if email already exists
            const duplicateAdmin = await Admin.findOne({ where: { email } });
            if (duplicateAdmin) {
                return res.status(409).json({ error: "Email already used" });
            }

            // Extract last 9 digits of the contact number
            const lastNineDigits = contact.slice(-9);

            // Check if contact already exists by comparing last 9 digits
            const duplicateAdminContact = await Admin.findOne({
                where: sequelize.where(sequelize.fn('right', sequelize.col('contact'), 9), lastNineDigits)
            });
            if (duplicateAdminContact) {
                return res.status(409).json({ error: "Contact already used" });
            }


            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create the Admin with hashed password
            const createdAdmin = await Admin.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                contact,
                role,
                image: ImagePath, // Assign ImagePath to the image field
                refreshToken: null,
            });

            // Generate a verification token and send verification email
            const expirationTime = new Date();
            expirationTime.setMinutes(expirationTime.getMinutes() + 5);
            const setToken = await Token.create({
                AdminId: createdAdmin.id,
                expiresAt: expirationTime,
                token: crypto.randomBytes(16).toString("hex"),
            });
            const Adminname = createdAdmin.name;
            const to = createdAdmin.email;
            const subject = "Account Verification";
            const verificationLink = `https://mightyflex.onrender.com/v1/verify-email/${createdAdmin.id}/${setToken.token}`;
            if (setToken) {
                sendEmails({ to, verificationLink, subject, Adminname });
            } else {
                return res.status(400).send("Token not created");
            }

            return res.status(201).send(createdAdmin); // Return the created Admin
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Failed to create Admin" });
        }
    },



    resendVerificationLink: async (req, res) => {
        try {
            // Retrieve the Admin ID from the cookie
            const adminId = req.cookies.userId;
            console.log(AdminId);
            if (!AdminId) {
                return res.status(404).json({ error: "Admin not found" });
            }

            const admin = await Admin.findOne({ where: { id: adminId } });

            if (!admin) {
                return res.status(404).json({ error: "Admin not found" });
            }

            // Generate a new verification token and set it in the database
            const verificationToken = crypto.randomBytes(16).toString("hex");

            // Calculate the new expiration time (12 minutes from now)
            const tokenExpiration = new Date();
            tokenExpiration.setMinutes(tokenExpiration.getMinutes() + 12);

            // Find the existing token and update it or delete it
            let existingToken = await Token.findOne({ where: { adminId } });
            if (existingToken) {
                await existingToken.update({
                    token: verificationToken,
                    expiresAt: tokenExpiration,
                });
            } else {
                await Token.create({
                    adminId,
                    token: verificationToken,
                    expiresAt: tokenExpiration,
                });
            }
            const usernamename = admin.name;
            const to = admin.email;
            const subject = "Resend Account Verification Link";
            const verificationLink = `            https://mightyflex.onrender.com/v1/verify-email/${AdminId}/${verificationToken}`;
            // Send the new verification link to the Admin's email

            await sendEmails({ to, verificationLink, subject, Adminname });

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

            const admintoken = await Token.findOne({
                where: {
                    AdminId: id,
                    token,
                    expiresAt: { [Op.gt]: now }, // Check if the token has not expired (greater than current time)
                },
            });
            // Set the Admin ID in a cookie
            res.cookie("AdminId", id, { maxAge: 86400000, httpOnly: true });

            if (!admintoken) {
                return res.render("resend-verification");
            } else {
                const admin = await Admin.findOne({ where: { id } });
                if (!admin) {
                    return res
                        .status(401)
                        .redirect("https://mightyflexs.vercel.app/register");
                } else if (admin.isVerified) {
                    return res
                        .status(200)
                        .redirect("https://mightyflexs.vercel.app/login");
                } else {
                    admin.isVerified = true;
                    await admin.save();

                    // Remove the verification token from the database after successful verification
                    await admintoken.destroy();

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

            const admin = await Admin.findOne({ where: { otp } });

            if (!admin) {
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
            // const Admin = await Admin.findOne({ where: { otp } );
            const admin = await Admin.findOne({ where: { otp } });

            if (!admin) {
                return res.status(404).json({ error: "Admin not found" });
            }
            // hash the newPassword before storing it in your database for security

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Update the Admin's password attribute with the hashed password
            admin.password = hashedPassword;

            // Set the OTP attribute to null
            admin.otp = null;

            // Save the changes to the Admin
            await admin.save();

            return res.status(200).json({ message: "Password successfully reset." });
        } catch (error) {
            return res.status(500).send({ error: "Failed to reset the password" });
        }
    },

    getAllAdmins: async (req, res) => {
        try {
            // Use the Admin model to find all Admins
            const admins = await Admin.findAll({
                order: [["id", "DESC"]],
            });

            // Return the list of Admins in a JSON response
            return res.status(200).json(admins);
        } catch (error) {
            return res.status(500).json({ error: "Failed to retrieve Admins" });
        }
    },

    forgetPassword: async (req, res) => {
        try {
            const { email } = req.body;
            if (!email) {
                return res.status(400).json({ error: "Email is required" });
            }

            const admin = await Admin.findOne({ where: { email } });

            if (!admin) {
                return res.status(404).json({ error: "Email not found" });
            }

            // Generate a new 4-digit OTP
            const otp = generateOTP(); // You need to implement the `generateOTP` function

            admin.otp = otp; // Update the 'otp' field with the new OTP
            await admin.save();

            // Send the OTP to the Admin's email
            sendingEmails({
                from: "no-reply@example.com",
                to: email,
                subject: "OTP for Password Reset",
                text: `Hello, ${admin.name} Your OTP is: ${otp}`,
            });

            return res.status(200).json({ message: "OTP sent successfully." });
        } catch (error) {
            return res.status(500).send({ error: "Failed to send OTP" });
        }
    },

    // Update Admin

    updateAdmin: async (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, email, password, contact, role, isVerified } = req.body;
        try {
            const admin = await Admin.findByPk(id);
            if (!admin) {
                return res.status(404).json({ error: "Admin not found" });
            }
            await admin.update({ firstName, lastName, email, password, contact, role, isVerified });
            res.json({ message: "Admin updated successfully" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteAdmin: async (req, res) => {
        const { id } = req.params;
        try {
            const admin = await Admin.findByPk(id);
            if (!admin) {
                return res.status(404).json({ error: "Admin not found" });
            }
            await admin.destroy();
            return res.status(200);
        } catch (err) {
            res.status(500).json({ error: "Failled To Delete Admin" });
        }
    },

    createAdmin: async (AdminDataInfo, password) => {
        try {
            // Create the account'
            const expirationTime = new Date();
            expirationTime.setMinutes(expirationTime.getMinutes() + 12);

            const admin = await Admin.create(AdminDataInfo);

            if (!admin) {
                throw new Error("Admin not created");
            }

            const expirationTimeISO = expirationTime.toISOString();

            // // Call the sendSecretCode function and await its completion
            // await sendSecretCode({ Admin, password });
            await sendingEmails({
                from: "no-reply@example.com",
                to: `${admin.email}`,
                subject: "Your Login Details",
                text: `Dear ${admin.name},
      
      Thank you for registering with Mightyflex. Here are your login details:
      
      Adminname: ${admin.email}
      Password: ${password}
      
      For security reasons, we recommend changing your password after the initial login. You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.
      
      If you have any questions or need assistance, feel free to contact our support team.
      
      Best regards,
      Mightyflex Support`,
            });

            const setToken = await Token.create({
                AdminId: admin.id,
                expiresAt: expirationTimeISO,
                token: crypto.randomBytes(16).toString("hex"),
            });

            if (!setToken) {
                throw new Error("Token not created");
            }

            await sendingEmails({
                from: "no-reply@example.com",
                to: `${admin.email}`,
                subject: "Account Verification Link",
                text: `Hello, ${admin.name} Please verify your email by clicking this link:             https://mightyflex.onrender.com/v1/verify-email/${Admin.id}/${setToken.token}`,
            });

            // Return the created Admin
            return admin;
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
            const { email, password } = req.body;
            const admin = await Admin.findOne({
                where: { email },
            });
            // Chech if Admin Exists
            if (!admin) {
                return res.status(404).send({ error: "Email Not Found." });
            }
            // Check If Admin is verified
            // if (!Admin.isVerified) {
            //   return res.status(403).send({
            //     error: "Email not verified. Kindly check your email to verify.",
            //   });
            // }
            // Validate Password
            const isPasswordValid = await bcrypt.compare(password, admin.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: "Invalid password" });
            } else {
                // Assighn Accecc Key
                const accessToken = jwt.sign(
                    {
                        email: admin.email,
                        id: admin.id,
                        name: admin.firstName,
                    },
                    process.env.SECRET_KEY,
                    { algorithm: "HS256", expiresIn: "20m" }
                );

                const refreshToken = jwt.sign(
                    {
                        email: admin.email,
                        id: admin.id,
                        name: admin.firstName,
                    },
                    process.env.REFRESH_KEY,
                    { algorithm: "HS256", expiresIn: "1d" }
                );
                admin.refreshToken = refreshToken;
                await admin.save();

                res.cookie("jwt", refreshToken, {
                    maxAge: 24 * 60 * 60 * 1000, 
                    secure: true,
                    httpOnly: true,
                    sameSite: "none",
                });
                const { id, email, firstName, lastName, role } = admin;

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
            }
        } catch (error) {
            console.log(error);
            return res.status(400).send({ error: "Login failed" });
        }
    },

    logout: async (req, res) => {
        try {
            const id = req.user.id;
            console.log(id);
            // Assuming you store the Admin's information in the request object
            const admin = await Admin.findByPk(id);
            if (!admin) {
                return res.status(401).json({ error: "Not authenticated" });
            }
            // Invalidate the Admin's refresh token
            admin.refreshToken = null;
            await admin.save();
            // Clear the refresh token cookie on the client side
            res.clearCookie("jwt");
            return res.status(200).json({ message: "Logout successful" });
        } catch (error) {
            return res.status(500).json({ error: "Failed to logout" });
        }
    },
};

module.exports = AdminController;
