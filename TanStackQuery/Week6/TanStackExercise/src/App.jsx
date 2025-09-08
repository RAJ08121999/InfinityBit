import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Fetchold from "./pages/Fetchold";
import FetchRQ from "./pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FetchIndv from "./pages/FetchIndv";
import InfiniteScroll from "./pages/InfiniteScroll";


//creating a router
const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:"/trad",
        element:<Fetchold/>,
      },
      {
        path:"/rq",
        element:<FetchRQ/>,
      },
      {
        path:"/rq/:id",
        element:<FetchIndv/>,
      },
      {
        path:"/infinite",
        element:<InfiniteScroll/>,
      },
    ],
  },
]);


const App = () => {

  const queryClient = new QueryClient();
  //this instance has all the features we need from tanStackQuery
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen = {false}/>
      <RouterProvider router = {router} />
    </QueryClientProvider>
  );
  
}

export default App
