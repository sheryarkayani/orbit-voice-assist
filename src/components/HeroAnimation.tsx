
import React, { useEffect, useState } from 'react';

const HeroAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-orbit">
      <div className={`absolute inset-0 bg-gradient-to-br from-orbit-purple/10 to-orbit-blue/10 backdrop-blur-sm 
        transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      </div>

      {/* Dashboard Interface */}
      <div className={`absolute inset-0 transition-all duration-1000 ease-in-out transform 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        
        {/* Navigation Bar */}
        <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 mr-4"></div>
          <div className="flex-1 h-6 bg-gray-100 rounded-md"></div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex h-[calc(100%-3rem)]">
          {/* Left Sidebar */}
          <div className="w-56 bg-white border-r border-gray-200 p-4">
            <div className="h-8 w-40 bg-gradient-to-r from-orbit-purple to-orbit-blue rounded-md mb-6"></div>
            <div className="space-y-3">
              <div className="h-6 bg-gray-100 rounded-md w-full"></div>
              <div className="h-6 bg-gray-100 rounded-md w-full"></div>
              <div className="h-6 bg-orbit-purple/10 rounded-md w-full"></div>
              <div className="h-6 bg-gray-100 rounded-md w-full"></div>
              <div className="h-6 bg-gray-100 rounded-md w-full"></div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="h-20 bg-card-gradient rounded-lg w-full mb-3"></div>
              <div className="h-6 bg-gray-100 rounded-md w-2/3 mx-auto"></div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 bg-gray-50 p-6">
            <div className="flex justify-between mb-6">
              <div className="h-8 bg-white rounded-md w-48 shadow-sm"></div>
              <div className="h-8 bg-orbit-purple rounded-md w-36 shadow-sm"></div>
            </div>
            
            {/* Dashboard Cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="h-32 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                <div className="h-6 bg-gray-100 rounded-md w-1/2"></div>
                <div className="h-10 bg-orbit-purple/10 rounded-md w-2/3"></div>
              </div>
              <div className="h-32 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                <div className="h-6 bg-gray-100 rounded-md w-1/2"></div>
                <div className="h-10 bg-orbit-blue/10 rounded-md w-2/3"></div>
              </div>
              <div className="h-32 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                <div className="h-6 bg-gray-100 rounded-md w-1/2"></div>
                <div className="h-10 bg-gray-100 rounded-md w-2/3"></div>
              </div>
            </div>
            
            {/* Activity Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="h-6 bg-gray-100 rounded-md w-48 mb-6"></div>
              
              {/* Conversation Bubbles */}
              <div className="space-y-4">
                {/* Customer Message */}
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 mr-3"></div>
                  <div className="bg-gray-100 rounded-2xl py-3 px-4 max-w-[80%]">
                    <div className="h-4 bg-gray-300 rounded w-64 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
                
                {/* AI Response - animated typing */}
                <div className="flex items-start justify-end">
                  <div className="bg-gradient-to-r from-orbit-purple/20 to-orbit-blue/20 rounded-2xl py-3 px-4 max-w-[80%]">
                    <div className="h-4 bg-orbit-purple/30 rounded w-72 mb-2"></div>
                    <div className="h-4 bg-orbit-purple/30 rounded w-56 mb-2"></div>
                    <div className="h-4 bg-orbit-purple/30 rounded w-64"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orbit-purple to-orbit-blue flex-shrink-0 ml-3 flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                </div>
                
                {/* Typing Indicator */}
                <div className="flex items-center space-x-1 ml-12">
                  <div className="w-2 h-2 rounded-full bg-orbit-purple animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-orbit-purple animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-orbit-purple animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
