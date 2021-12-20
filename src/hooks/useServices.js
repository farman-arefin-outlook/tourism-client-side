import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [totalService, setTotalService] = useState(0);
    //const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then((data) => {
                setServices(data.services);
                setTotalService(data.count);
            });
    }, []);
    return { services, setServices, totalService };
};

export default useServices;