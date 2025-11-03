import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const {user, userLoading}= useContext(AuthContext)

    const location = useLocation()
    
    if(userLoading){
        return <div className="text-7xl">Loading</div>
    }
    if(user && user.email){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to="/login"/>
    }
};

export default PrivateRoute;
