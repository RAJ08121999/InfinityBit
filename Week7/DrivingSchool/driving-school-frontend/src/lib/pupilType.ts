export interface Pupil {
    _id: string;
    forename: string;
    surname: string;
    dob:string;
    gender:'Male'|'Female'|'Other'
    email?: string;
    home?:{
        mobile?:string;
        work?:string;
    };
    pickupAddress?: {
        postcode?: string;
        houseNo?: string;
        address?: string;
    };
    homeAddress?: {
        postcode?: string;
        houseNo?: string;
        address?: string;
    };
    licenseType: string;
    pupilType?: string;
    pupilOwner?: string;
    allowTextMessaging?: boolean;
    passedTheory?: boolean;
    fott?: boolean;
    fullAccess?: boolean;
    pupilCaution?: boolean;
    discount?: string;
    createdAt: string;
    updatedAt: string;
};  


// Type for creating or updating a pupil (no _id needed)
export interface PupilInput {
    forename: string;
    surname: string;
    dob:string;
    gender:'Male'|'Female'|'Other'
    email?: string;
    home?:{
        mobile?:string;
        work?:string;
    };
    pickupAddress?: {
        postcode?: string;
        houseNo?: string;
        address?: string;
    };
    homeAddress?: {
        postcode?: string;
        houseNo?: string;
        address?: string;
    };
    licenseType: string;
    pupilType?: string;
    pupilOwner?: string;
    allowTextMessaging?: boolean;
    passedTheory?: boolean;
    fott?: boolean;
    fullAccess?: boolean;
    pupilCaution?: boolean;
    discount?: string;
}



// import { z } from "zod"
// import { pupilSchema } from "./pupilSchema"

// // This is your form & API input type
// export type PupilInput = z.infer<typeof pupilSchema>

// // This is the full type returned from backend
// export interface Pupil extends PupilInput {
//     _id: string
//     createdAt: string
//     updatedAt: string
// }
