import mongoose from "mongoose";

const OnboardSchema = new mongoose.Schema({
    summary : {
        type:String
    },
    clensubmerchant:{
        type:String
    },
    abnsubmerchant:{
        type:String
    },
    iosubmerchant:{
        type:String
    },
    websubmerchant:{
        type:String
    },
    hsubmerchantpassddkyc:{
        type:String
    },
    sbsbacnumpayidsetacc:{
        type:String
    },
    payiddomsubmerchant:{
        type:String
    },
    azupayclidasumailaddforlog:{
        type:String
    },
    trolforthedashuser:{
        type:String
    },
    submerchantuserexpdegImg:{
        type:String
    },
    othercommentsReachText:{
        type:String
    },
}, {timestamps:true})

module.exports = mongoose.model.Onboard || mongoose.model("Onboard" , OnboardSchema)