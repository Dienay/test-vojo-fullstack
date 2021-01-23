import * as mongoose from 'mongoose'

export const JobsSchema = new mongoose.Schema(
    {
        compensation: [],
        active: Boolean,
        open: Boolean,
        assignments: [],
        requirements: [],
        totalSpots: Number,
        title: String,
        information: String,
        location: [],
        education: String,
        company: String,
        createdBy: String,
        updatedBy: String,
        createdAt: String,
        updatedAt: String,
        v: Number,
        imageUrl: String,
        description: []
    }
)