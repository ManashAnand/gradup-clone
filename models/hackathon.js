import { Schema, model, models } from 'mongoose'

const HackathonSchema = new Schema({
  logo: {
    type: String,
  },
  title: {
    type: String,
  },
  organizer: {
    type: String,
  },
  registerEndDate: {
    type: Date,
  },
  hackathonStartDate: {
    type: Date,
  },
  hackathonEndDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  applicant: {
    type: [String],
  },
  rewards: {
    type: String,
  },
  link: {
    type: String,
  },
  poster: {
    type: String,
  },
  problem: {
    type: String,
  },
  tags: {
    type: [String],
  },
})

const Hackathon = models.Hackathon || model('Hackathon', HackathonSchema)

export default Hackathon
