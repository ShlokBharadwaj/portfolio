import { React, ReactElement, useState } from 'react'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Terminal = () => {

    const delay = ms => new Promise(res => setTimeout(res, ms))

    async function handleEnterPress (e) {
        if(e.onKeyUp === 13) {
            console.log(e)
            await delay(150)
            getUserInput()
            removeInput()
            await delay(150)
            addNewLine()
        }
    }

    return (
        <div className='m-0 p-0 box-border h-[100vh] flex items-center justify-center'>
            <div className='container flex flex-col w-full max-w-[800px] h-[500px] overflow-hidden rounded-lg border-gray-400 m-5 cursor-text'>
                <div className="menu flex flex-row items-center text-center w-full h-6 bg-[#424040] py-0 px-2 cursor-default">
                    <div className="buttons-flex absolute flex flex-row ">
                        <div className="button red bg-[#f5544d] w-3 h-3 rounded-full mr-2 cursor-pointer"></div>
                        <div className="button yellow bg-[#fabd2f] w-3 h-3 rounded-full mr-2 cursor-pointer"></div>
                        <div className="button green bg-[#47d043] w-3 h-3 rounded-full mr-2 cursor-pointer"></div>
                    </div>
                    <div className="title flex-1 text-center">
                        <a href="https://github.com/ShlokBharadwaj" target="_blank"><h1 className='hidden sm:block font-bold text-md'>
                            {/* <FontAwesomeIcon icon={faGithub} className="" /> */}
                            github.com/ShlokBharadwaj
                        </h1>
                        </a>
                    </div>
                </div>
                <div className='app flex flex-col bg-[#282a35] w-full h-full p-2 overflow-auto text-white' onKeyUp={handleEnterPress}></div>
            </div>
        </div>
    )
}

export default Terminal