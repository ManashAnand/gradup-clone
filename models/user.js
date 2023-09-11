import { Schema, model, models } from 'mongoose';

const EducationSchema = new Schema({
    collegeName: {
        type: String,
    },
    degreeName: {
        type: String,
    },
    branch: {
        type: String,
    },
    grade: {
        type: String,
    },
    startYear: {
        type: Date,
    },
    endYear: {
        type: Date,
    }
})

const ProjectSchema = new Schema({
    id: {
        type: String,
    },
    projectName: {
        type: String,
    },
    projectDes: {
        type: String,
    },
    projectLinks: {
        type: String,
    },
    skillsUsed: {
        type: [String],
    }
})

const ExperienceSchema = new Schema({
    companyName: {
        type: String,
    },
    companyWebsite: {
        type: String,
    },
    location: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    skills: {
        type: [String],
    },
    certificateLink: {
        type: String,
    },
    currentlyWorking: {
        type: Boolean
    }

})

const SocialSchema = new Schema({
    websiteName: {
        type: String,
    },
    websiteLink: {
        type: String,
    }
})

const AchievementSchema = new Schema({
    achievementName: {
        type: String,
    },
    achievementYear: {
        type: Date,
    }
})

const UserSchema = new Schema({
    id: {
        type: String,
        unique: [true, 'UserId already exists'],
        required: [true, 'UserId is required from User Model'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    profilePhoto: {
        type: String,
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    contactNo: {
        type: String,
        length: 10,
    },
    appliedJobs: {
        type: [String]
    },
    education: {
        type: [EducationSchema],
    },
    resume: {
        type: String
    },
    project: {
        type: [ProjectSchema]
    },
    bio: {
        type: String,
    },
    experience: {
        type: [ExperienceSchema],
    },
    social: {
        type: [SocialSchema],
    },
    skills: {
        type: String
    },
    interest: {
        type: String,
    },
    location: {
        type: String,
    },
    gender: {
        type: Boolean,
    },
    achievement: {
        type: [AchievementSchema],
    },
    role:{
        type:String,
        default:"User",
    },
    isAlumni:{
        type:Boolean,
        default:false
    },
    joinDate:{
        type:Date,
    },
    password:{
        type:String,
        required:true
    }
});


const User = models.User || model("User", UserSchema);

export default User;