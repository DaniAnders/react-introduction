import React, {createContext, useState} from "react";

export const AuthContext = createContext({
    token: null,
    setToken: () => {},
    user: null,
    setUser: () => {},
});


const AuthContextProvider = (props) => {

    const [token, setToken] = useState([]);
    const [user, setUser] = useState([]);


    return (
        <AuthContext.Provider value={{token, setToken, user, setUser}}>
            {props.children}
        </AuthContext.Provider>
     ); 

}

export default AuthContextProvider;