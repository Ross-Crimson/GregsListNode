import { Schema } from "mongoose";


export const JobSchema = new Schema({
    company: { type: String, minLength: 0, maxLength: 100, required: true },
    jobTitle: { type: String, minLength: 0, maxLength: 100, required: true },
    hours: { type: Number, min: 1, max: 168, required: true },
    rate: { type: Number, min: 1, max: 100000000, required: true },
    imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
    description: { type: String, minLength: 0, maxLength: 500 }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    })