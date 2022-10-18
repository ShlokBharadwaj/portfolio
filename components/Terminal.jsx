import React from 'react'

const Terminal = () => {
    return (
        <div className='m-0 p-0 box-border h-[100vh] flex items-center justify-center'>
            <div className='container'>
                <div className="menu">
                    <div className="buttons-flex">
                        <div className="button red"></div>
                        <div className="button yellow"></div>
                        <div className="button green"></div>
                    </div>
                    <div className="title">
                        <p>Terminal</p>
                    </div>
                </div>
                <div className="terminal">
                    <div className="terminal-header">
                        <div className="terminal-header-button red"></div>
                        <div className="terminal-header-button yellow"></div>
                        <div className="terminal-header-button green"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terminal