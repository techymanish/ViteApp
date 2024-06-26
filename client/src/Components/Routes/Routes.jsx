import { createBrowserRouter } from "react-router-dom";
import Verify from "../Form/Verify";
import Home from "../Home/Home";
import Login from "../Login/Login";
import CertificateForm from "../Form/CertificateForm";
import Certificate from "../Form/Certificate";
import Signup from "../Signup/Signup";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"/student",
        element:<Verify/>
    },
    {
        path:"/instituition",
        element:<CertificateForm/>
    },
    {
      path:"verify",
      element:<Certificate/>  
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    }
])

export default router;