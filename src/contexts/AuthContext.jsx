import React, {createContext, useState} from "react";

export const AuthContext = createContext({
    token: null,
    setToken: () => {},
    user: null,
    setUser: () => {},
    error: null,
    setError: () => {}
});


const AuthContextProvider = (props) => {

    const [token, setToken] = useState([]);
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);


    return (
        <AuthContext.Provider value={{token, setToken, user, setUser, error, setError}}>
            {props.children}
        </AuthContext.Provider>
     ); 

}

export default AuthContextProvider;