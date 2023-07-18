import React from 'react';

const Email = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:shlokbharadwaj7@gmail.com';
    };

    handleEmailClick();

    return (
        <div className="text-white block">
            <h1 className="cursor-pointer text-blue-500 hover:underline" onClick={handleEmailClick}>
                shlokbharadwaj7@gmail.com
            </h1>
        </div>
    );
};

export default Email;
