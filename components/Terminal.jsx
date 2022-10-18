import { React, ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Terminal = () => {
    return (
        <div className='m-0 p-0 box-border h-[100vh] flex items-center justify-center'>
            <div className='container flex flex-col w-full max-w-[800px] h-[500px] overflow-hidden rounded-lg border-gray-400 m-5 cursor-text text-center'>
                <div className="menu">
                    <div className="buttons-flex">
                        <div className="button red"></div>
                        <div className="button yellow"></div>
                        <div className="button green"></div>
                    </div>
                    <div className="title">
                        <a href="https://github.com/ShlokBharadwaj" target="_blank"><h1>
                            <FontAwesomeIcon icon={faGithub} className="pr-2"/>
                            github.com/ShlokBharadwaj</h1></a>
                    </div>
                </div>
                <div id="app"></div>
            </div>
        </div>
    )
}

export default Terminal