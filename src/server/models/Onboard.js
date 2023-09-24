import mongoose from "mongoose";

const OnboardSchema = new mongoose.Schema(
  {
    summary: {
      type: String,
      require: true,
    },
    clensubmerchant: {
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
    sbsbacnumpayidsetacc: {
      type: String,
      require: true,
    },
    payiddomsubmerchant: {
      type: String,
      require: true,
    },
    azupayclidasumailaddforlog: {
      type: String,
      require: true,
    },
    trolforthedashuser: {
      type: String,
      require: true,
    },
    submerchantuserexpdegImg: {
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

module.exports =
  mongoose.model.Onboard || mongoose.model("Onboard", OnboardSchema);
