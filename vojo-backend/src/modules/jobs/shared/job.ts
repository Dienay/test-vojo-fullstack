import { Document } from 'mongoose'

export class Compensation {
    currency: string;
    amount: number;
    recurrency: string;
    isVariable: boolean
}

export class Location {
    city: string;
    state: string;
    country: string;
}

export class Job extends Document{
    compensation: Compensation;
    active: boolean;
    open: boolean;
    assignments: [];
    requirements: [];
    totalSpots: number;
    title: string;
    information: string;
    location: Location;
    education: string;
    company: string;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    v: number;
    imageUrl: string;
    description: [];
}
