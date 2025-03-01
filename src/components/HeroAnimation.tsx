
import React, { useEffect, useState } from 'react';
import { Mic, MessageSquare, ShoppingBag } from 'lucide-react';

const HeroAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    // Chat animation sequence
    const chatInterval = setInterval(() => {
      setChatStep(prev => (prev < 4 ? prev + 1 : prev));
    }, 2000);
    
    return () => clearInterval(chatInterval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-orbit">
      <div className={`absolute inset-0 bg-gradient-to-br from-orbit-purple/10 to-orbit-blue/10 backdrop-blur-sm 
        transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      </div>

      {/* Shopify Store Logo Banner */}
      <div className={`absolute top-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md flex items-center justify-center gap-2 z-10
        transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ShoppingBag size={16} className="text-green-600" />
        <span className="text-sm font-medium">Your Shopify Store</span>
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
            <div className="h-8 w-40 bg-gradient-to-r from-orbit-purple to-orbit-blue rounded-md mb-6 flex items-center justify-center">
              <span className="text-white text-xs font-medium">Orbit AI for Shopify</span>
            </div>
            <div className="space-y-3">
              <div className="h-6 bg-gray-100 rounded-md w-full flex items-center px-3">
                <span className="text-xs text-gray-500">Dashboard</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-md w-full flex items-center px-3">
                <span className="text-xs text-gray-500">Orders</span>
              </div>
              <div className="h-6 bg-orbit-purple/10 rounded-md w-full flex items-center px-3">
                <span className="text-xs text-orbit-purple">Voice Support</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-md w-full flex items-center px-3">
                <span className="text-xs text-gray-500">Analytics</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-md w-full flex items-center px-3">
                <span className="text-xs text-gray-500">Settings</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="h-20 bg-gradient-to-br from-orbit-purple/20 to-orbit-blue/20 rounded-lg w-full mb-3 p-3">
                <div className="text-xs text-orbit-purple font-medium mb-1">Voice AI Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-700">Active - Handling Calls</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">98% Resolution Rate</div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 bg-gray-50 p-6">
            <div className="flex justify-between mb-6">
              <div className="h-8 bg-white rounded-md w-48 shadow-sm flex items-center px-3">
                <span className="text-sm text-gray-700">Voice Support Dashboard</span>
              </div>
              <div className="h-8 bg-orbit-purple rounded-md w-36 shadow-sm flex items-center justify-center">
                <span className="text-xs text-white">Add Phone Number</span>
              </div>
            </div>
            
            {/* Dashboard Cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="h-32 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <Mic size={16} className="text-orbit-purple" />
                  <div className="text-sm text-gray-700">Today's Calls</div>
                </div>
                <div className="text-3xl font-semibold text-orbit-purple">42</div>
                <div className="text-xs text-green-600">+12% from yesterday</div>
              </div>
              <div className="h-32 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-orbit-blue" />
                  <div className="text-sm text-gray-700">Resolved Queries</div>
                </div>
                <div className="text-3xl font-semibold text-orbit-blue">38</div>
                <div className="text-xs text-green-600">90% resolution rate</div>
              </div>
              <div className="h-32 bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={16} className="text-green-600" />
                  <div className="text-sm text-gray-700">Shopify Orders</div>
                </div>
                <div className="text-3xl font-semibold text-green-600">127</div>
                <div className="text-xs text-green-600">+8% from yesterday</div>
              </div>
            </div>
            
            {/* Activity Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Mic size={18} className="text-orbit-purple" />
                <div className="text-base font-medium">Recent Voice Conversations</div>
              </div>
              
              {/* Conversation Bubbles */}
              <div className="space-y-4">
                {/* Customer Message */}
                <div className={`flex items-start transition-opacity duration-300 ${chatStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 mr-3 flex items-center justify-center">
                    <span className="text-xs font-medium">C</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl py-3 px-4 max-w-[80%]">
                    <div className="text-sm">Hi, I'd like to check the status of my order #1234.</div>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className={`flex items-start justify-end transition-opacity duration-300 ${chatStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-gradient-to-r from-orbit-purple/20 to-orbit-blue/20 rounded-2xl py-3 px-4 max-w-[80%]">
                    <div className="text-sm">I can help with that! Let me look up your order #1234 from your Shopify store right away.</div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orbit-purple to-orbit-blue flex-shrink-0 ml-3 flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                </div>
                
                {/* AI Response 2 */}
                <div className={`flex items-start justify-end transition-opacity duration-300 ${chatStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-gradient-to-r from-orbit-purple/20 to-orbit-blue/20 rounded-2xl py-3 px-4 max-w-[80%]">
                    <div className="text-sm">Your order has been shipped and is currently in transit. The tracking number is TRK5678. It should arrive by Thursday, June 15.</div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orbit-purple to-orbit-blue flex-shrink-0 ml-3 flex items-center justify-center text-white text-xs font-bold">
                    AI
                  </div>
                </div>
                
                {/* Customer Message 2 */}
                <div className={`flex items-start transition-opacity duration-300 ${chatStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 mr-3 flex items-center justify-center">
                    <span className="text-xs font-medium">C</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl py-3 px-4 max-w-[80%]">
                    <div className="text-sm">Great, thank you! Can I change the delivery address?</div>
                  </div>
                </div>
                
                {/* Typing Indicator - only show if last step not reached */}
                {chatStep < 4 && (
                  <div className="flex items-center space-x-1 ml-12">
                    <div className="w-2 h-2 rounded-full bg-orbit-purple animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-orbit-purple animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-orbit-purple animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
