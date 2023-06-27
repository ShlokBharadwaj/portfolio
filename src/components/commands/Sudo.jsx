import React, { useEffect } from 'react';

const Sudo = () => {
    useEffect(() => {
        window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
    }, []);

    return (
        <div>
            <h1>Permission denied: You're not admin</h1>
            <h1>Nice try! You've been Rickrolled! &#x1F609;</h1>
        </div>
    );
};

export default Sudo;
