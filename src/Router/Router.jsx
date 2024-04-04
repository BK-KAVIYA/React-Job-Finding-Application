import { Route, Router, Routes, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import JobDetail from "../Pages/JobDetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path: "/",
            element:<Home />
        },
        {
          path: "/post-job",
          element:<PostJob/>
        },
        {
          path: "/job-detail/:id",
          element:<JobDetail/>
        }
      ]
    },
    // <Routes>
    //     <Route path={"/job-detail/:id"} element={<JobDetail />} />
    // </Routes>
    
  ]);

  export default router;