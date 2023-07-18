import React from 'react';

export const generateTabs = (num = 0) => {
    let tabs = '\xA0\xA0';
    for (let i = 0; i < num; i++) {
        tabs += '\xA0';
    }
    return tabs;
};

const Socials = () => {
    const socialLinks = [
        {
            number: '1',
            platform: 'GitHub',
            link: 'https://github.com/ShlokBharadwaj',
        },
        {
            number: '2',
            platform: 'LinkedIn',
            link: 'https://www.linkedin.com/in/shlokbharadwaj/',
        },
        {
            number: '3',
            platform: 'CodeChef',
            link: 'https://www.codechef.com/users/shlokbharadwaj',
        },
        {
            number: '4',
            platform: 'Instagram',
            link: 'https://www.instagram.com/shlok.bharadwaj/',
        },
    ];

    return (
        <div>
            <p className="text-white">Here are my social links:</p>
            <div className="flex flex-col">
                {socialLinks.map((link) => (
                    <div key={link.number} className="flex items-center mb-2">
                        <span className="font-semibold">{link.number}.</span>
                        <a
                            className="text-blue-500 underline ml-2"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.platform}
                        </a>
                        <span className="text-white mx-2">-</span>
                        <span className="text-gray-400 break-all">
                            {generateTabs(4 - link.platform.length / 2)}
                            {link.link}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Socials;
