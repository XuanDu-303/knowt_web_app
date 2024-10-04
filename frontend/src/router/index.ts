import {
    createBrowserRouter
} from "react-router-dom"
// import ROUTES from "./domain-routes";
import Home from "@/pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
    },
])

export default router