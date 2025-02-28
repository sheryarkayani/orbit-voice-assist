
import React, { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const IntegrationAnimation = () => {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    if (step < 3) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      setCompleted(true);
    }
  }, [step]);

  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden shadow-orbit bg-white">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-orbit-purple/10 to-orbit-blue/10 flex items-center px-4">
        <div className="h-6 w-48 bg-gradient-to-r from-orbit-purple/30 to-orbit-blue/30 rounded-md"></div>
      </div>
      
      <div className="pt-20 pb-12 px-6 flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-md">
          <h3 className="text-xl font-display font-medium mb-8 text-center">Connect to Shopify</h3>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className={`flex items-center ${step >= 1 ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${step >= 1 ? 'bg-orbit-purple text-white' : 'bg-gray-200 text-gray-400'} transition-colors duration-300`}>
                {step > 1 ? <Check size={16} /> : "1"}
              </div>
              <div className="flex-1">
                <p className="font-medium">Connect your Shopify store</p>
                {step >= 1 && (
                  <div className="mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: step >= 1 ? '100px' : '0px' }}>
                    <div className="h-10 rounded-md border border-gray-200 flex items-center px-4 justify-between">
                      <span className="text-sm text-gray-500">mystore.myshopify.com</span>
                      <button className={`text-sm text-orbit-purple ${step >= 2 ? 'bg-orbit-purple/10 px-3 py-1 rounded-md' : ''}`}>
                        {step >= 2 ? 'Connected' : 'Connect'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Step 2 */}
            <div className={`flex items-center ${step >= 2 ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${step >= 2 ? 'bg-orbit-purple text-white' : 'bg-gray-200 text-gray-400'} transition-colors duration-300`}>
                {step > 2 ? <Check size={16} /> : "2"}
              </div>
              <div className="flex-1">
                <p className="font-medium">Import your product catalog</p>
                {step >= 2 && (
                  <div className="mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: step >= 2 ? '100px' : '0px' }}>
                    <div className="h-10 rounded-md bg-orbit-purple/5 flex items-center px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-orbit-purple h-2.5 rounded-full" style={{ width: step >= 3 ? '100%' : '40%' }}></div>
                      </div>
                      <span className="ml-3 text-sm whitespace-nowrap">{step >= 3 ? 'Completed' : 'Syncing...'}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Step 3 */}
            <div className={`flex items-center ${step >= 3 ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${step >= 3 ? 'bg-orbit-purple text-white' : 'bg-gray-200 text-gray-400'} transition-colors duration-300`}>
                {completed ? <Check size={16} /> : "3"}
              </div>
              <div className="flex-1">
                <p className="font-medium">Set up your AI assistant</p>
                {step >= 3 && (
                  <div className="mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: step >= 3 ? '100px' : '0px' }}>
                    <div className="h-10 rounded-md border border-gray-200 flex items-center px-4 justify-between">
                      <span className="text-sm text-gray-500">Configure assistant</span>
                      <button className={`text-sm ${completed ? 'bg-orbit-purple/10 text-orbit-purple px-3 py-1 rounded-md' : 'text-orbit-purple'}`}>
                        {completed ? 'Completed' : 'Configure'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Success Message */}
          {completed && (
            <div className="mt-10 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h4 className="text-lg font-medium mb-2">Integration Complete!</h4>
              <p className="text-muted-foreground text-sm">Your AI assistant is ready to handle customer queries.</p>
              <button className="mt-6 cta-button mx-auto">
                Go to Dashboard <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationAnimation;
