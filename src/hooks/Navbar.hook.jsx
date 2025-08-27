import React from "react";

const NavbaarContextObject = React.createContext({
    currentPage:"",
    setCurrentPage: (currentPage) => {},
})


const NavbarProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <NavbaarContextObject.Provider value={{currentPage, setCurrentPage}}>
            {children}
        </NavbaarContextObject.Provider>
    )
}

export const useNavbar = () => {
    const context = React.useContext(NavbaarContextObject);
    if (!context) {
        throw new Error("useNavbar must be used within a NavbarProvider");
    }
    return context;
}

export { NavbarProvider};