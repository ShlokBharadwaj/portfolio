import React from 'react';

const History = ({ commandHistory }) => {
    return (
        <div className='text-white block'>
            <h1>Command History:</h1>
            <ul>
                {commandHistory.map((command, index) => (
                    <li key={index}>{command}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;
