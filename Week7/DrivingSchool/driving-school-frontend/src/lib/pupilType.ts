export interface Pupil {
    _id: string;
    forename: string;
    surname: string;
    dob:string;
    gender:'Male'|'Female'|'Others'
    email?: string;
    home?:{
        mobile?:string;
        work?:string;
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
    gender:'Male'|'Female'|'Others'
    email?: string;
    home?:{
        mobile?:string;
        work?:string;
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
}
