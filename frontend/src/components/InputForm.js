import React from 'react'

const InputForm = ({placeholder,icon}) => {
  return (
    <div className="w-full flex items-center">
            <div className="h-10 pl-4 flex bg-[#DDE4E4] items-center justify-center rounded-l-[20px] text-gray-500">
            </div>
            <input type="text" 
            placeholder={placeholder}
            icon = {icon}
            className="outline-none bg-[#DDE4E4] px-4 py-2 w-full rounded-r-[20px] h-10 text-gray-500"/>
        </div>
  )
}

export default InputForm