import React from 'react';
import { useWindowSize } from '../../plugins/useWindowSize';

const Hook = () => {
    const [width, height] = useWindowSize();
    
    return (
        <div className="404">
            <p>width: {width}</p>
            <p>height: {height}</p>
        </div>
    );
};

export default Hook;