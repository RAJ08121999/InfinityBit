import React, { useContext, useEffect } from 'react'
import Home from './Pages/Home'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import BlogPage from './Pages/BlogPage'
import { AppContext } from './context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);

  return (
    
      <Routes>

        <Route path='/' element={<Home/>}></Route>

        <Route path='/categories/:category' element={<CategoryPage/>}></Route>

        <Route path='/blog/:blogId' element={<BlogPage/>}></Route>

        <Route path='/tags/:tag' element={<TagPage/>}></Route>

      </Routes>
    
  )
}

export default App


// api https://codehelp-apis.vercel.app/api/get-blogs