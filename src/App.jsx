import React, { useState } from 'react'
import Button from './Button'

const App = () => {
    let [read, setRead] = useState('')
    
    let handleRead = (e)=>{
        setRead(read + e.target.value)
    }
    let handleEqual = ()=>{
        setRead(eval(read))
    }
    let handleDelete = ()=>{
        setRead(read.slice(0,-1))
    }
    let handleClean = (e)=>{
        setRead('')
    }

  return (
    <>
    <div className="frame h-screen bg-gray-500 flex justify-center items-center">
        <div className="calculator h-2/3 w-80 bg-black rounded-xl flex justify-around items-center flex-col p-5 py-6 gap-2">
            <input className='bg-white text-5xl w-full text-right outline-none rounded-md'value={read} type="text" disabled/>
            <div className='flex justify-around items-center h-full'>
                <div className="numbers grid grid-cols-4 gap-2 px-1">
                    <Button value={'AC'} onClick={handleClean} />
                    <Button value={'Del'} onClick={handleDelete} />
                    <Button value={'.'} onClick={handleRead} />
                    <Button value={'+'} onClick={handleRead} />
                    <Button value={7} onClick={handleRead} />
                    <Button value={8} onClick={handleRead} />
                    <Button value={9} onClick={handleRead} />
                    <Button value={'-'} onClick={handleRead} />
                    <Button value={4} onClick={handleRead} />
                    <Button value={5} onClick={handleRead} />
                    <Button value={6} onClick={handleRead} />
                    <Button value={'*'} onClick={handleRead} />
                    <Button value={1} onClick={handleRead} />
                    <Button value={2} onClick={handleRead} />
                    <Button value={3} onClick={handleRead} />
                    <Button value={'/'} onClick={handleRead} />
                    <Button value={'00'} onClick={handleRead} />
                    <Button value={0} onClick={handleRead} />
                    <Button value={'='} onClick={handleEqual} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App