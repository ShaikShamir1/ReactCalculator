import React from 'react'

const Button = ({value, onClick}) => {
  
  return (
      <input className={value == '=' ? 'h-14 w-32 rounded-xl bg-gray-400 text-2xl cursor-pointer hover:bg-gray-700 hover:text-white transition-colors': 'h-14 w-14 rounded-xl bg-gray-400 text-2xl cursor-pointer hover:bg-gray-700 hover:text-white transition-colors' }  type="button" value={value} onClick={onClick} />
  )
}

export default Button