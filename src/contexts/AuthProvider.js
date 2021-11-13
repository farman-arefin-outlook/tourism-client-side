import { createContext } from "react";
import useAdmit from "../hooks/useAdmit";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    //hooks
    const AllContexts = useFirebase();
    const { services } = useServices();

    const { admit, selectedCourse } = useAdmit();
    const data = { AllContexts, services, admit, selectedCourse };
    return (<AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;