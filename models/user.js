import {Schema, model, models} from 'mongoose';

const EducationSchema = new Schema({
    collegeName:{
        type:String,
    }
})

const ProjectSchema = new Schema({
    projectName:{
        type:String,
    }
})

const ExperienceSchema = new Schema({
    companyName:{
        type:String,
    }
})

const SocialSchema = new Schema({
    websiteName:{
        type:String,
    }
})

const AchievementSchema = new Schema({
    achievementName:{
        type:String,
    }
}) 

const UserSchema = new Schema({
    id:{
        type:String,
        unique:[true,'UserId already exists'],
        required:[true,'UserId is required'],
    },
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    profilePhoto:{
        type:String,
    },
    email:{
        type:String,
        unique:[true, "Email already exists"],
        required:[true, "Email is required"],
    },
    contactNo:{
        type:String,
        length:10,
    },
    appliedJobs:{
        type:[String]
    },
    education:{
        type:[EducationSchema],
    },
    resume:{
        type:String
    },
    project:{
        type:[ProjectSchema]
    },
    bio:{
        type:String,
    },
    experience:{
        type:[ExperienceSchema],
    },
    social:{
        type:[SocialSchema],
    },
    skills:{
        type:String
    },
    interest:{
        type:String,
    },
    location:{
        type:String,
    },
    gender:{
        type:Boolean,
    },
    achievement:{
        type:[AchievementSchema],
    }
});


const User = models.User || model("User", UserSchema);

export default User;