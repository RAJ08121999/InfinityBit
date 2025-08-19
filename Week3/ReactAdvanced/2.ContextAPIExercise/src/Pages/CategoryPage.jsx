import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header/>
            <div className='mt-[80px]'>
                <button
                className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                onClick={()=>navigation(-1)}
                >
                    Back
                </button>
                <h2 className='text-blue-700 font-medium text-xl'>
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default CategoryPage
