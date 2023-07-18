import React from 'react';

const History = ({ commandHistory }) => {
    return (
        <div className="text-white block">
            <h1 className='font-semibold'>Command History:</h1>
            <ul>
                {commandHistory.map((command, index) => (
                    <li key={index}>
                        {index + 1}. {command}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
