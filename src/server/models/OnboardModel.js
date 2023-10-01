import mongoose from "mongoose";

const OnboardSchema = new mongoose.Schema(
  {
    clensubmerchant: {
      type: String,
      require: true,
    },
    recipientEmail: {
      type: String,
      require: true,
    },
    abnsubmerchant: {
      type: String,
      require: true,
    },
    iosubmerchant: {
      type: String,
      require: true,
    },
    websubmerchant: {
      type: String,
      require: true,
    },
    hsubmerchantpassddkyc: {
      type: String,
      require: true,
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

module.exports =
  mongoose.model.OnboardModel || mongoose.model("OnboardModel", OnboardSchema);
