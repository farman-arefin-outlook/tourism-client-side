import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.service);
                setTotalPages(data.count);
            });
    }, []);
    return { services, setServices };
};

export default useServices;