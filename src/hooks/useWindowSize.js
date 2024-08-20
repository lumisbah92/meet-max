import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 2000,
        height: 2000
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerWidth;
            setWindowSize({ width, height });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;
