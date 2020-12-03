import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth";

/// This to prevent a logged in user from accessing login and register routes

function AuthRoute({ components: Component, ...rest }){
    const { user } = useContext(AuthContext);

    return (
        <Route 
           { ...rest }
           render={ props => 
                user ? <Redirect to="/" /> : <Component {...props} />
        }
        />
    )
};


export default AuthRoute;