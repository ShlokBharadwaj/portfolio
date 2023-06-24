import { createContext, React, ReactElement, useState } from 'react'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


// TODO: A CRT animtion(fullscreen) for the terminal when doing rm -rf / or something
const Terminal = () => {

    const app = document.querySelector("#app");
    const delay = ms => new Promise(res => setTimeout(res, ms));


    return (
        <div className='m-0 p-0 box-border h-[100vh] flex items-center justify-center bg-[#264653]'>
            <div className='container flex flex-col w-full max-w-[800px] h-[500px] overflow-hidden rounded-lg m-5 cursor-text'>
                <div className="menu flex flex-row items-center text-center w-full h-6 bg-[#424040] py-0 px-2 cursor-default">
                    <div className="buttons-flex absolute flex flex-row ">
                        <div className="button red bg-[#f5544d] w-3 h-3 rounded-full mr-2 cursor-pointer"></div>
                        <div className="button yellow bg-[#fabd2f] w-3 h-3 rounded-full mr-2 cursor-pointer"></div>
                        <div className="button green bg-[#47d043] w-3 h-3 rounded-full mr-2 cursor-pointer"></div>
                    </div>
                    <div className="title flex-1 text-center text-slate-200">
                        <a href="https://github.com/ShlokBharadwaj/portfolio" target="_blank"><h1 className='hidden sm:block font-bold text-md'>
                            <FontAwesomeIcon icon={faGithub} className="pr-2" />
                            github.com/ShlokBharadwaj
                        </h1>
                        </a>
                    </div>
                </div>
                <div className="app flex flex-col bg-[#282a35] w-full h-full p-2 overflow-auto text-white"></div>
            </div>
        </div>
    )
}

export default Terminal





























