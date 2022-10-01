import React from 'react';
import { useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    useEffect(() => {
        const timeOutID = setTimeout(() => setDebouncedValue(value), delay);
        // Clear timeout
        return () => clearTimeout(timeOutID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
