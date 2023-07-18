const Projects = () => {
    const projects = [
        {
            number: '1',
            title: "Web Projects",
            description: 'My personal website showcasing various UIs which can be used across various Web-related projects.',
            link: 'https://example.com/WebProjects',
        },
        {
            number: '2',
            title: 'no-notes',
            description: 'A Android notes taking application with user authentication and verification.',
            link: 'https://example.com/no-notes',
        },
        {
            number: '3',
            title: 'Multiplayer tic-tac-toe',
            description: 'A Multiplayer game where two players can play simultaneously against each other. ',
            link: 'https://example.com/tic-tac-toe',
        },
        {
            number: '4',
            title: 'Chat App',
            description: 'A GUI Java application for chatting.',
            link: 'https://example.com/Chat-App',
        },
    ];

    return (
        <div>
            <p className="text-white">
                Here are some of my projects you shouldn't miss:
            </p>
            {projects.map((project) => (
                <div key={project.number}>
                    <span className="font-semibold">
                        {project.number}.{' '}
                        <a
                            className=""
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.title}
                        </a>
                    </span>
                    <p className="text-white">{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
