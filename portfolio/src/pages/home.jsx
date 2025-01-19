import React from 'react'
import Avatar from '../images/avatar.jpg'

const home = () => {
  return (

    <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-screen-lg mx-auto py-28">
    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
      <img
        src={Avatar}
        alt="Avatar"
        className="rounded-lg w-48 sm:w-56 md:w-72 object-cover shadow-xl border-4 border-gray-200"
      />
    </div>
  
    {/* Text Section */}
    <div className="md:text-left text-center md:w-1/2 px-4 sm:px-6 ">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
        Hi, <span className="text-blue-600">leester</span> here.
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
        Discover professional solutions tailored to your needs. Our expertise
        ensures success for every project, every time.
      </p>
      <button className="px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  </div>
  

  )
}

export default home