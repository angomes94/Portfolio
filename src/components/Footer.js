import React from 'react'

export default function Footer() {
  const urlLinkedin = "https://www.linkedin.com/in/andr%C3%A9-gomes-356a71208/";
  const urlIG = "https://www.instagram.com/angomes94/"

  return (
    <div id='contact' className=' flex flex-row w-full justify-center items-center py-5'>
      <i onClick={() => window.open(urlLinkedin, '_blank', 'noopener,noreferrer')} className="fa-brands fa-linkedin-in text-2xl cursor-pointer pr-4 duration-300 hover:scale-110 focus:scale-110"></i>
      <i onClick={() => window.open(urlIG, '_blank', 'noopener,noreferrer')} className="fa-brands fa-instagram text-2xl cursor-pointer duration-300 hover:scale-110 focus:scale-110"></i>
    </div>
  )
}
