import React from 'react'

export default function Background({ children, maxWidth }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className={`${maxWidth} w-full mx-auto text-center`}>
        {children}
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 -z-10 md:z-0 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse transition-all duration-60"></div>
        <div className="absolute bottom-20 right-10 -z-10 md:z-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000 transition-all duration-60"></div>
        <div className="absolute top-1/2 right-20 -z-10 md:z-0 w-16 h-16 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-500 transition-all duration-60"></div>
      </div>
    </div>
  );
}
