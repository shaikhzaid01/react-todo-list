import React from 'react'

const Footer = () => {
  let footerStyle ={
    position: "absolute",
    // top: "120vh",
    width:"100%"
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">
        Copyright  &copy; MyTodoList.com
      </p>
    </footer>
  )
}

export default Footer
