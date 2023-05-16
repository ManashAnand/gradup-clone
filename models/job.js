import {Schema, model, models} from 'mongoose';
  /// To add job descriptions 
const JobSchema = new Schema({
   id:{
       type:String,
   },
   title:{
       type:String,
       required:[true,"Job title is required"],
   },
   isIntern:{
       type:Boolean,
       required:[true,'Whether it is Job/Intern is required'],
   },
   companyName:{
       type:String,
       required:[true,"Company name is required"],
   },
   companyLink:{
       type:String,
   },
   duration:{
       type:String,
       required:[true,"Duration is required"],
   },
   stipend:{
       type:String,
       required:[true,"Stipend is required"],
   },
   lastDate:{
       type:Date,
       required:[true,"Last date is required"],
   },
   expectedStartDate:{
       type:String,
   },
   skillsRequired:{
       type:[String],
   },
   eligiblilty:{
       type:[String],
   },
   perks:{
       type:[String],
   },
   noOfOpenings:{
       type:Number,
   },
   workingHours:{
       type:String
   },
   postedDate:{
       type:Date,
   },
   appliedCandidated:{
       type:[String],
   }
});

const Job = models.Job || model("Job", JobSchema);

export default Job;