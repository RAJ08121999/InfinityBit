import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
});

//to fetch the data

export const fetchPosts = async (pageNumber) => {
    try{
        const res= await api.get(`/posts?_start=${pageNumber}&_limit=3`);
        return res.status ===200 ? res.data : [];
    }
    catch(error){
        console.log(error);
    }
};


//fetch individual detailed data

export const FetchIndvPost = async (id) =>{
    try{
        const res = await api.get(`/posts/${id}`);
        return res.status === 200 ?res.data : [];
    }
    catch(error){
        console.log(error);
    }
}


//to delete the post

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}