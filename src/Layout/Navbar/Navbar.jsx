import React from 'react'
import logo from '../../assets/Logo.png'
function Navbar() {
  return (
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="h-8 w-auto" src={logo}
                            alt="Logo" />
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#"
                            class="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
                        <a href="#"
                            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Health
                            Issues</a>
                        <a href="#"
                            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Doctors</a>
                        <a href="#"
                            class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Community</a>
                    </div>
                </div>
                <div class="flex items-center">
                    <button
                        class="bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-opacity-90">
                            Sign in</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;