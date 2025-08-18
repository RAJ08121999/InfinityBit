import { createContext, useState } from "react";
import { baseUrl } from "../../baseUrl";

export const AppContext = createContext();
// step 1 done, created a context 

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    // data filling

    async function fetchBlogPosts (page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false)
    }
function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page);
}
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
    // this data will be shared step 2 done

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

    // children jo ki app.js hai usko sara data provide kar rhe hai 
}