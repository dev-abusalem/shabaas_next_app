import mongoose from "mongoose";

const FormOnboardSchema = new mongoose.Schema(
  {
    clensubmerchant: {
      type: String,
    },
    recipientEmail: {
      type: String,
    },
    abnsubmerchant: {
      type: String,
    },
    iosubmerchant: {
      type: String,
    },
    websubmerchant: {
      type: String,
    },
    hsubmerchantpassddkyc: {
      type: String,
    },
    othercommentsReachText: {
      type: String,
    },
    clietnIp: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormOnboard", FormOnboardSchema);
