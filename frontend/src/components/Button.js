import React, {memo} from 'react'

export const Button = ({text,onClick}) => {
  console.log('re-rebder')
  return (
    <button 
    type='button'
    className={" hover:bg-main-pup-black px-7 py-2 font-bold text-nowrap text-sm rounded-full border-none bg-main-pup text-main-100 items-center"}
    onClick = {onClick}
    >
    {text}
    
    
    
    
    </button>
  )
}
export default memo(Button);