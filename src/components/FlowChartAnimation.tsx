
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, MessageSquare, Phone, ShoppingBag } from 'lucide-react';

const FlowChartAnimation = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 4);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden shadow-orbit bg-white p-6">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-orbit-purple/10 to-orbit-blue/10 flex items-center px-4">
        <div className="h-6 w-48 bg-gradient-to-r from-orbit-purple/30 to-orbit-blue/30 rounded-md"></div>
      </div>
      
      <div className="pt-16 pb-4 px-4">
        <h3 className="text-xl font-display font-medium mb-8 text-center">Order Resolution Process</h3>
        
        <div className="flex flex-col items-center">
          {/* Flow Chart */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-4xl">
            {/* Customer Node */}
            <div className={`p-4 rounded-xl border ${step === 0 ? 'border-orbit-purple bg-orbit-purple/5 shadow-orbit-sm' : 'border-gray-200'} transition-all duration-300`}>
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-full ${step === 0 ? 'bg-orbit-purple text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center transition-colors duration-300`}>
                  <MessageSquare size={18} />
                </div>
                <span className="ml-3 font-medium">Customer Inquiry</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "Where is my order #45678?"
              </p>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className={`${step === 0 ? 'text-orbit-purple animate-pulse' : 'text-gray-300'} transition-colors duration-300`} />
            </div>
            
            {/* Orbit AI Node */}
            <div className={`p-4 rounded-xl border ${step === 1 ? 'border-orbit-purple bg-orbit-purple/5 shadow-orbit-sm' : 'border-gray-200'} transition-all duration-300`}>
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-full ${step === 1 ? 'bg-orbit-purple text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center transition-colors duration-300`}>
                  <Phone size={18} />
                </div>
                <span className="ml-3 font-medium">Orbit AI Assistant</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Processes request and looks up order info
              </p>
            </div>
          </div>
          
          <div className="h-10 flex items-center justify-center my-2">
            <ArrowRight className={`transform rotate-90 ${step === 1 ? 'text-orbit-purple animate-pulse' : 'text-gray-300'} transition-colors duration-300`} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full max-w-4xl">
            {/* Confirmation Node */}
            <div className={`p-4 rounded-xl border ${step === 3 ? 'border-orbit-purple bg-orbit-purple/5 shadow-orbit-sm' : 'border-gray-200'} transition-all duration-300`}>
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-full ${step === 3 ? 'bg-orbit-purple text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center transition-colors duration-300`}>
                  <CheckCircle size={18} />
                </div>
                <span className="ml-3 font-medium">Resolution Complete</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Customer satisfied with real-time tracking info
              </p>
            </div>
            
            <div className="flex justify-center">
              <ArrowRight className={`transform rotate-180 ${step === 2 ? 'text-orbit-purple animate-pulse' : 'text-gray-300'} transition-colors duration-300`} />
            </div>
            
            {/* Shopify Node */}
            <div className={`p-4 rounded-xl border ${step === 2 ? 'border-orbit-purple bg-orbit-purple/5 shadow-orbit-sm' : 'border-gray-200'} transition-all duration-300`}>
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 rounded-full ${step === 2 ? 'bg-orbit-purple text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center transition-colors duration-300`}>
                  <ShoppingBag size={18} />
                </div>
                <span className="ml-3 font-medium">Shopify Integration</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Retrieves live tracking data from Shopify
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-orbit-purple/10 to-orbit-blue/10"></div>
    </div>
  );
};

export default FlowChartAnimation;
