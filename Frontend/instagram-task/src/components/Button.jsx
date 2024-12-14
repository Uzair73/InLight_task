import React from 'react'

const Button = ({classname,onclick, text}) => {
  return (
    <>
    <button onClick={onclick} className={`py-3 rounded-lg px-5 bg-black text-white ${classname}`}>{text}</button>
    </>
  )
}

export default Button