import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';

const OTPSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
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