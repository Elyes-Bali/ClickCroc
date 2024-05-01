const mongoose = require("mongoose");

//User Schema Or Document Structure
const tokenSchema = new mongoose.Schema({
  // token : {
  //     type : String,

  // },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // Refers to the User schema
  },
});
tokenSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  const PasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const PasswordExpire = Date.now() + 60 * 60 * 1000; // 1h

  return { resetToken, PasswordToken, PasswordExpire };
};

module.exports = Token = new mongoose.model("token", tokenSchema);
