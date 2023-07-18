import React, { useEffect } from 'react';

const GUI = () => {
    const handleRedirect = () => {
        window.open('https://shlokbharadwaj.github.io/', '_blank');
    };

    useEffect(() => {
        handleRedirect();
    }, []);

    return (
        <div className='text-white block'>
            <h1 className="">
                Explore my GUI portfolio by clicking <span className="cursor-pointer text-blue-500 hover:underline" onClick={handleRedirect}>here</span>.
            </h1>
        </div>
    );
};

export default GUI;
