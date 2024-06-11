import React from 'react'

const Button = () => {
    

    const handleClick = (e) => e.target.textContent = "ah? ╰(*°▽°*)╯"
    
  return (
    <div><button onDoubleClick={(e) => handleClick(e)}>Click me 🤣</button></div>
  )
}

export default Button


