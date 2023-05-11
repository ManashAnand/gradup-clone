import {Schema, model, models} from 'mongoose';

const HRSchema = new Schema({
    id:{
        type:String,
        unique:[true,'UserId already exists'],
        required:[true,'UserId is required'],
    },
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        unique:[true, "Email already exists"],
        required:[true, "Email is required"],
    },
    contact:{
        type:String,
        length:10,
    },
    posts: {
        type: [String],
    },
    companyName:{
        type:String,
        required:[true,'Company Name is required'],
    }
});


const HR = models.HR || model("HR", HRSchema);

export default HR;