import React, { useEffect, useRef } from 'react'
import BackCircle from './BackCircle'
import { textAnim } from '../utils/canvas';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        textAnim(canvasRef.current, "IDM-VTON")
    }, [])

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center relative overflow-hidden'>
            <BackCircle />
            <canvas ref={canvasRef} className='h-full w-full absolute top-0 left-10'></canvas>
            <p className='w-2/3 absolute bottom-52 font-sans text-center'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora id molestias ad obcaecati totam inventore itaque ratione velit fuga aspernatur, repellat vitae eligendi iusto minima dolorem, temporibus debitis cumque repudiandae?</p>
        </div>
    )
}

export default Canvas