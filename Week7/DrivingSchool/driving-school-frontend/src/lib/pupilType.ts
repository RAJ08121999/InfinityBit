export interface Pupil {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    licenseType: string;
    age: number;
};  


// Type for creating or updating a pupil (no _id needed)
export interface PupilInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    licenseType: string;
    age: number;
}
