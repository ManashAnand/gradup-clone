import {Schema, model, models} from 'mongoose';
import mongoose from 'mongoose';
const jobSchema = new Schema({
    title:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    },
    impression:{
        type:Number,
        default:0
    },
    _id:{
        type:mongoose.Types.ObjectId
    },
    canSee:{
        type:Boolean,
        default:false,
    }
})

const HRSchema = new Schema({
    _id:{
        type:mongoose.Types.ObjectId
    },
    aboutCompany:{
        type:String,
    },
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    companyPhoto:{
        type:String,
    },
    email:{
        type:String,
        unique:[true,"User email is required"],
    },
    companyEmail:{
        type:String,
        unique:[true, "Email already exists"],
        required:[true, "Email is required"],
    },
    contact:{
        type:String,
        length:10,
    },
    posts: {
        type: [jobSchema],
    },
    companyName:{
        type:String,
        required:[true,'Company Name is required'],
    }
});


const HR = models.HR || model("HR", HRSchema);

export default HR;