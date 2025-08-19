import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api"
    const [blog,setBlog] = useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}/get-blog?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error in fetching blog ids ");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () =>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

    return (
        <div>
            <Header/>
            <div>
                <button
                onClick={()=> navigation(-1)}
                className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                >
                    Back
                </button>
            </div>
            {
                loading ? (<Spinner/>) : blog ? (<div><BlogDetails post={blog}/>
                <h2>Related Blogs</h2>
                {
                    relatedBlogs.map( (post ) => (
                        <div key = {post.id}>
                            <BlogDetails post = {post}/>
                        </div>
                    ))
                }
                </div>) : (<div><p>
                    No Blog Found 
                </p></div>)
                
            }
        </div>
    )
}

export default BlogPage
