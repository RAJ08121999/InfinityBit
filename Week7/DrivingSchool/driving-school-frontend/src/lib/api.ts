import axios from 'axios';
import type { Pupil , PupilInput } from './pupilType';

const baseURL = (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:6006/api';

console.log('API Base URL:', baseURL);

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//Pupils api calls

export const getPupils = async ():Promise<Pupil[]> =>{
    const res = await api.get('/pupils');
    return res.data.data;
};

export const addPupil = async (pupil: PupilInput) => {
    try {
        const res = await api.post('/pupils', pupil);
        return res.data;
    } catch (err: any) {
        console.log("Full Backend error",err);
        console.error("Backend error details:", err.response?.data?.error.details);
        throw err;
    }
};



export const updatePupil = async (id: string, pupil:PupilInput)=>{
    const res = await api.put(`/pupils/${id}`,pupil);
    return res.data;
}

export const deletePupil = async(id:string) => {
    const res = await api.delete(`/pupils/${id}`);
    return res.data;
};



export default api;