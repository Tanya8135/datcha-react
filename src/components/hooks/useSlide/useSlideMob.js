import { useState, useEffect } from "react";

function useSlideMob() {
    const [isMobSlide, setIsMobSlide] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobSlide(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobSlide
}

export default useSlideMob;