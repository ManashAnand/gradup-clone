import { Schema, model, models } from 'mongoose';
// Later we can make a fetch request to user profile to import the data from their profile to reduce the storage requirement once the website will scale enough
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
    },
    currentlyStudying: {
        type: Boolean,
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

const ApplicationSchema = new Schema({
    userID: {
        type: String,
        required: [true, "UserId is required."],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    jobID: {
        type: String,
        required: [true, 'JobId is required'],
    },
    contactNo: {
        type: String,
        length: 10,
    },
    coverLetter: {
        type: String,
    },
    education: {
        type: [EducationSchema],
    },
    resumeURL: {
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
        type: [String]
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
    expectedJoiningDate: {
        type: String,
    },
    expectedCTC: {
        type: String,
    }
});


const Application = models.Application || model("Application", ApplicationSchema);

export default Application;