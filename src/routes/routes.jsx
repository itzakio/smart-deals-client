import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyProduct from "../pages/MyProduct";
import MyBids from "../pages/MyBids";
import CreateProducts from "../pages/CreateProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/all-products",
                element: <AllProducts/>
            },
            {
                path: "/my-products",
                element: <MyProduct/>
            },
            {
                path: "/my-bids",
                element: <MyBids/>
            },
            {
                path: "/create-product",
                element: <CreateProducts/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
])

export default router;