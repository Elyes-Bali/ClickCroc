const bcryptjs = require("bcryptjs");
// Require Model
const User = require("../models/userShema");
const isAuth = require("../middleware/authenticate");
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const sendemail = require("../sendemailconfig/sendemail");
const tokenSchema = require("../models/tokenSchema");

// Registration
router.post("/register", async (req, res) => {
  try {
    // Get body or Data
    const { username, email, password, authorize, role, company } = req.body;
    console.log(username, email, password);
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.send({ msg: "Email Already used !" });
    }

    const createUser = new User({
      username,
      email,
      password,
      authorize,
      role,
      company,
    });

    // Save Method is Used to Create User or Insert User
    // But Before Saving or Inserting, Password will Hash
    // Because of Hashing. After Hash, It will save to DB
    const resetTokenObj = createUser.generatePasswordToken();
    const resetToken = resetTokenObj.resetToken;
    await createUser.save();
    const created = await createUser.save();


    // Send email with reset password link
    const message =
      "You are receiving this because you (or someone else) have requested the activation for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
      `https://localhost:3000/activercompte/${resetToken}\n\n` +
      "If you did not request this, please ignore this email .\n";

    await sendemail({
      email: email,
      subject: "C&C: Account Activation",
      message: message,
    });
    console.log(created);
    res.status(200).send({ msg: "Please Activate Your Account ! Thank you " });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.put("/validateaccount/:token", async (req, res) => {
  try {


    const resetValidToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetValidToken,
      resetValidExpire: { $gt: Date.now() },
    });

    if (!user)return res.status(400).send({ error: "Invalid Token or expired" });

    user.isValid=true

    await user.save();

    if(user.role != "clt"){
      res.status(200).send({ message: "Account activated , please wait for the Admin confirmation" });

    }else{
      res.status(200).send({ message: "Account activated , You can login now" });

    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}),
// router.post("/logup", async (req, res) => {
//   try {
//     // Get body or Data
//     const { username, email, password, role, authorize, company } = req.body;
//     console.log(username, email, password);

//     const createUser = new User({
//       username,
//       email,
//       password,
//       role,
//       authorize,
//       company,
//     });

//     // Save Method is Used to Create User or Insert User
//     // But Before Saving or Inserting, Password will Hash
//     // Because of Hashing. After Hash, It will save to DB
//     const created = await createUser.save();
//     console.log(created);
//     res.status(200).send("Registered");
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Find User if Exist
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).send({ msg: "Invalid Credentials" });
    }

    // if (user.authorize === false) {
    //   return res.status(400).send({ msg: "User Blocked" });
    // }

    if (user.role != "clt" && user.role!="admin") {
      if (user.authorize === false) {
        return res.status(400).send({ msg: "User Blocked" });
      }
      if (user.isValid === false) {
        return res.status(400).send({ msg: "Activate Your Account !" });
      }
    } else {
      if (user.isValid === false) {
        return res.status(400).send({ msg: "User Blocked" });
      }
    }
    // Verify Password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ msg: "Invalid Credentials" });
    }
    // Generate Token Which is Define in User Schema
    const token = await user.generateToken();
    // res.cookie("jwt", token )
    // res.status(200).send("LoggedIn")
    return res
      .status(200)
      .send({ searchedUser: user, token: `Bearer ${token}` });
  } catch (error) {
    return res.status(500).send({ msg: "can not login" });
    console.log(error);
  }
});

router.get("/auth", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body);
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("user updated");
  } catch (error) {
    res.status(400).send({ message: "No user with this id" });
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send({ allusers: result });
  } catch (error) {
    console.log(error);
  }
});

router.get("/allsel", async (req, res) => {
  try {
    const result = await User.find({ role: "sel" });
    res.status(200).send({ devs: result });
  } catch (error) {
    console.log(error);
  }
});

router.get("/allclt", async (req, res) => {
  try {
    const result = await User.find({ role: "clt" });
    res.status(200).send({ clts: result });
  } catch (error) {
    console.log(error);
  }
});

router.get("/allman", async (req, res) => {
  try {
    const result = await User.find({ role: "manufacturer" });
    res.status(200).send({ clts: result });
  } catch (error) {
    console.log(error);
  }
});

router.put("/apply/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { children: req.body } }
  );
});

router.post("/forgotpassword", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send({ msg: "This email does not exist." });
    }

    // Get reset token and set it for the user
    const resetTokenObj = user.getResetPasswordToken();
    const resetToken = resetTokenObj.resetToken;
    await user.save();

    // Send email with reset password link
    const message =
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
      `https://localhost:3000/reset/${resetToken}\n\n` +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n";

    await sendemail({
      email: email,
      subject: "C&C: Reset Password",
      message: message,
    });

    // Send success response
    res.status(200).send({
      message: "Reset password email has been sent WOOHOO 🎉",
    });
  } catch (error) {
    res.status(400).send({
      message: "ERROR on last catch forgotpassword.js, likely no user exists",
      error,
    });
    console.log(error);
  }
});

router.put("/resetPassword/:token", async (req, res) => {
  try {
    const { password, confirmpassword } = req.body;
    console.log(password);
    console.log(confirmpassword);
    if (password != confirmpassword) {
      res.status(401).send("Passwords dosen't Match !!");
    }

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).send({ error: "Invalid Token or expired" });

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).send({ message: "Password has been reset" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}),
  (module.exports = router);
