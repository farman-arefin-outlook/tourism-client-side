import { useState } from "react";


const useAdmit = () => {
    const [selectedCourse, setSelectedCourse] = useState([]);
    function admit(service) {
        const isHave = selectedCourse.find((selectedService) => selectedService.key === service.key);
        if (isHave) {
            alert("Service already selected!!");
        }
        else {
            const newSelection = [...selectedCourse, service];
            setSelectedCourse(newSelection);
        }

    }
    return { admit, selectedCourse };
};

export default useAdmit;