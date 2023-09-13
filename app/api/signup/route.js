
import User from '@models/user';

import { connectToDB } from '@utils/database';

import bcrypt from 'bcrypt'


export const POST = async(req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
          return res.status(400).send('Please provide all required fields');
        }
        await connectToDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }
        const user =   await User.create({
            email:email,
            id: email,
            name: name ,
            profilePhoto: "",
            contactNo: "",
            appliedJobs: [],
            education: [],
            resume: "",
            project: [],
            bio: "",
            experience: [],
            social: [],
            skills: "",
            interest: "",
            location: "",
            gender: false,
            achievement: [],
            role: "User",
            isAlumni: false,
            joinDate: new Date(),
            password: password
        })
        await user.save();

        // Return the success response
        res.status(200).send('User registered successfully');
        
    } catch (error) {
        res.status(500).send("Error in creating user ")

    }
}