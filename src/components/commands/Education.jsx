import React from 'react';

const Education = () => {
    return (
        <div className="text-white block">
            <p className="mb-4">My Academic Journey:</p>
            <ul className="list-disc pl-6">
                <li>
                    <span className="font-semibold">Bachelor of Technology in Computer Science</span><br />
                    MATS University | CGPA: 9.54 | 2019-2023
                </li>
                <li>
                    <span className="font-semibold">Class 12th</span><br />
                    Baldwin Farm Area High School | Percentage: 59.20 | 2016 - 2019
                </li>
                <li>
                    <span className="font-semibold">Class 10th</span><br />
                    Baldwin Farm Area High School | CGPA: 9.2 | 2016
                </li>
            </ul>
        </div>
    );
};

export default Education;
