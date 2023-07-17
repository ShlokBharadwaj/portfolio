import React, { useState, useEffect, useRef, useCallback, createContext } from 'react';
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
import Sudo from './commands/Sudo';
import Rmrf from './commands/Rmrf';

const Terminal = () => {
    const [terminalClosed, setTerminalClosed] = useState(false);
    const [terminalMinimized, setTerminalMinimized] = useState(false);

    const [command, setCommand] = useState('');
    const [result, setResult] = useState('');

    const [activeCommand, setActiveCommand] = useState('');

    const terminalRef = useRef(null);

    useEffect(() => {
        const delayToShowWelcome = async () => {
            await new Promise((r) => setTimeout(r, 1000));
            setActiveCommand('welcome');
            terminalRef.current.focus();
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

    const handleChange = useCallback(
        (e) => setCommand(e.target.value)
    );

    const handleKeyDown = ((e) => {
        if (e.key === 'Enter') {
            handleCommandInput(command);
        }
    });

    const handleCommandInput = (input) => {
        setCommand(input);

        switch (input.toLowerCase()) {
            case 'help':
                setActiveCommand('help');
                setResult('');
                break;
            case 'about':
                setActiveCommand('about');
                setResult('');
                break;
            case 'clear':
            case 'cls':
                setActiveCommand('clear');
                setResult('');
                break;
            case 'echo':
                setActiveCommand('echo');
                setResult('');
                break;
            case 'education':
                setActiveCommand('education');
                setResult('');
                break;
            case 'email':
            case 'mail':
                setActiveCommand('email');
                setResult('');
                break;
            case 'gui':
                setActiveCommand('gui');
                setResult('');
                break;
            case 'history':
                setActiveCommand('history');
                setResult('');
                break;
            case 'projects':
                setActiveCommand('projects');
                setResult('');
                break;
            case 'socials':
                setActiveCommand('socials');
                setResult('');
                break;
            case 'welcome':
                setActiveCommand('welcome');
                setResult('');
                break;
            case 'whoami':
                setActiveCommand('whoami');
                setResult('');
                break;
            case 'sudo':
            case 'su':
                setActiveCommand('sudo');
                setResult('');
                break;
            case 'rm -rf':
            case 'sudo rm -rf':
            case 'sudo rm-rf':
                setActiveCommand('rm -rf');
                setResult('');
                break;
            default:
                setActiveCommand('');
                setResult(
                    <div>
                        <span className="font-semibold text-white">
                            shell: <span className="font-normal">Command not found:</span>
                        </span>{' '}
                        <span className="text-red-500">{input}</span>
                        <div className="text-white block">
                            Type <span className="text-green-400">'help'</span> for a list of commands.
                        </div>
                    </div>
                );
                break;

        }

        setCommand(''); // Clear the command after executing
        terminalRef.current.focus();
    };


    const renderCommandResult = () => {
        switch (activeCommand) {
            case 'help':
                return <Help />;
            case 'about':
                return <About />;
            case 'clear':
                return <Clear />;
            case 'echo':
                return <Echo />;
            case 'education':
                return <Education />;
            case 'email':
                return <Email />;
            case 'gui':
                return <GUI />;
            case 'history':
                return <History />;
            case 'projects':
                return <Projects />;
            case 'socials':
                return <Socials />;
            case 'welcome':
                return <Welcome />;
            case 'whoami':
                return <Whoami />;
            case 'sudo':
                return <Sudo />;
            case 'rm -rf':
                return < Rmrf />;
            default:
                return <div>{result}</div>;
        }
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
                <div className={`app flex flex-col bg-[#282a35] w-full h-full p-2 overflow-auto text-white relative ${terminalClosed ? 'hidden' : ''} ${terminalMinimized ? 'minimized' : ''}`} onClick={() => terminalRef.current.focus()}>
                    {/* {showWelcome && <Welcome />} */}
                    <div className="terminal-info absolute bottom-0 left-0 w-full bg-[#282a35] text-white py-1 px-2 flex">
                        <span className="terminal-prefix text-green-400">user@terminal:~$</span>
                        <input
                            className="terminal-input bg-transparent outline-none ml-1 caret-green-400 animate-pulse w-full"
                            type="text"
                            autoFocus
                            ref={terminalRef}
                            value={command}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="command-result">{renderCommandResult()}</div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
