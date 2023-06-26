import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Welcome from './commands/Welcome';
import Help from './commands/Help';
import About from './commands/About';
import Clear from './commands/Clear';
import Echo from './commands/Echo';
import Education from './commands/Education';
import Email from './commands/Email';
import GUI from './commands/GUI';
import History from './commands/History';
import Projects from './commands/Projects';
import Socials from './commands/Socials';
import Whoami from './commands/Whoami';


const Terminal = () => {
    const [terminalClosed, setTerminalClosed] = useState(false);
    const [terminalMinimized, setTerminalMinimized] = useState(false);

    const [command, setCommand] = useState('');
    const [result, setResult] = useState('');

    const [showHelp, setShowHelp] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showClear, setShowClear] = useState(false);
    const [showEcho, setShowEcho] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showGUI, setShowGUI] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showSocials, setShowSocials] = useState(false);
    const [showWhoami, setShowWhoami] = useState(false);

    useEffect(() => {
        const delayToShowWelcome = async () => {
            await new Promise((r) => setTimeout(r, 1000));
            setShowWelcome(true);
        };
        delayToShowWelcome();
    }, []);

    const openTerminal = () => {
        setTerminalClosed(false);
        setTerminalMinimized(false);
    };

    const toggleTerminal = () => {
        if (terminalClosed) {
            openTerminal();
        } else {
            closeTerminal();
        }
    };

    const closeTerminal = () => {
        setTerminalClosed(true);
        setTerminalMinimized(false);
    };

    const handleCommandInput = (input) => {
        setCommand(input);

        switch (input.toLowerCase()) {
            case 'help':
                setShowHelp(true);
                setResult('');
                break;
            case 'about':
                setShowAbout(true);
                setResult('');
                break;
            case 'clear':
                setShowClear(true);
                setResult('');
                break;
            case 'echo':
                setShowEcho(true);
                setResult('');
                break;
            case 'education':
                setShowEducation(true);
                setResult('');
                break;
            case 'email':
                setShowEmail(true);
                setResult('');
                break;
            case 'gui':
                setShowGUI(true);
                setResult('');
                break;
            case 'history':
                setShowHistory(true);
                setResult('');
                break;
            case 'projects':
                setShowProjects(true);
                setResult('');
                break;
            case 'socials':
                setShowSocials(true);
                setResult('');
                break;
            case 'welcome':
                setShowWelcome(true);
                setResult('');
                break;
            case 'whoami':
                setShowWhoami(true);
                setResult('');
                break;

            default:
                setResult(`Command not recognized: ${input}`);
                break;
        }

        setCommand(''); // Clear the command after executing
    };

    const renderCommandResult = () => {
        if (showHelp) {
            return <Help />;
        } else if (showAbout) {
            return <About />;
        } else if (showClear) {
            return <Clear />;
        } else if (showEcho) {
            return <Echo />;
        } else if (showEducation) {
            return <Education />;
        } else if (showEmail) {
            return <Email />;
        } else if (showGUI) {
            return <GUI />;
        } else if (showHistory) {
            return <History />;
        } else if (showProjects) {
            return <Projects />;
        } else if (showSocials) {
            return <Socials />;
        } else if (showWelcome) {
            return <Welcome />
        } else if (showWhoami) {
            return <Whoami />;
        }

        // switch (command.toLowerCase()) {
        //     case 'about':
        //         return <About />;

        //     // Add more cases for other commands

        //     default:
        //         return <div>{result}</div>;
        // }
    };

    return (
        <div className={`m-0 p-0 box-border h-[100vh] flex items-center justify-center bg-[#264653] ${terminalClosed ? 'animate-close' : ''}`}>
            <div className="container flex flex-col w-full max-w-[800px] h-[500px] overflow-hidden rounded-lg m-5 cursor-text">
                <div className="menu flex flex-row items-center text-center w-full h-6 bg-[#424040] py-0 px-2 cursor-default">
                    <div className="buttons-flex absolute flex flex-row">
                        <div className="button red bg-[#f5544d] w-3 h-3 rounded-full mr-2 cursor-pointer" onClick={closeTerminal}></div>
                        <div className="button yellow bg-[#fabd2f] w-3 h-3 rounded-full mr-2 cursor-pointer" onClick={toggleTerminal}></div>
                        <div className="button green bg-[#47d043] w-3 h-3 rounded-full mr-2 cursor-pointer" onClick={openTerminal}></div>
                    </div>
                    <div className="title flex-1 text-center text-slate-200">
                        <a href="https://github.com/ShlokBharadwaj/portfolio" target="_blank" rel="noopener noreferrer">
                            <h1 className="hidden sm:block font-bold text-md">
                                <FontAwesomeIcon icon={faGithub} className="pr-2" />
                                github.com/ShlokBharadwaj
                            </h1>
                        </a>
                        <h1 className="sm:hidden font-bold text-md">
                            <FontAwesomeIcon icon={faGithub} className="pr-2 pl-11" />github.com/ShlokBharadwaj
                        </h1>
                    </div>
                </div>
                <div className={`app flex flex-col bg-[#282a35] w-full h-full p-2 overflow-auto text-white relative ${terminalClosed ? 'hidden' : ''} ${terminalMinimized ? 'minimized' : ''}`}>
                    {/* {showWelcome && <Welcome />} */}
                    <div className="terminal-info absolute bottom-0 left-0 w-full bg-[#282a35] text-white py-1 px-2 flex">
                        <span className="terminal-prefix text-green-400">user@terminal:~$</span>
                        <input
                            className="terminal-input bg-transparent outline-none ml-1 caret-green-400 animate-pulse w-full"
                            type="text"
                            autoFocus
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleCommandInput(command);
                                }
                            }}
                        />
                    </div>
                    <div className="command-result">{renderCommandResult()}</div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
