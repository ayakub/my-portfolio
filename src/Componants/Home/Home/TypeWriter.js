import React from 'react'
import { FaDownload, FaFileDownload } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'


const TypeWriter = () => {

    const handleType = () => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div>
            <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }} className="pt-3 text-3xl font-semibold text-yellow-600">
                <span className='font-semibold'>I'm a</span> {' '}
                <span style={{ fontWeight: '500' }} >
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Frontend Developer', 'React Developer', 'Web Developer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={60}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
            </h1>
            <div className='mt-5'>
                <button className='btn btn-primary text-white'><a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1ISN_AYZkfy4LV32FYzwvBqgmXfwE3A64/view?usp=sharing">Resume Download</a></button>
            </div>
        </div>
    )


}
export default TypeWriter;
