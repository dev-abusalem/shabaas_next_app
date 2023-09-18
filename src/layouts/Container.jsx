import React from 'react'

const Container = ({children , className}) => {
  return (
    <div className={className ? `${className} mx-auto md:max-w-[90pc] px-[5%]` :' mx-auto md:max-w-[90pc] px-[5%]' }>{children}</div>
  )
}

export default Container