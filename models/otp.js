import { Schema, model, models } from 'mongoose';


const OTPSchema = new Schema({
    id: {
        type: String,
    },
    otp:{
        type:String,
    },
    createdAt:{
        type:Date,
    }
});

const OTP = models.OTP || model("OTP", OTPSchema);

export default OTP;