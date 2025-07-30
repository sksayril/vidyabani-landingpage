import React from 'react';
import { Mic, Brain, MessageCircle, Volume2, Headphones, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Your AI Voice Assistant
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the future of learning with our advanced AI voice assistant that makes studying 
            interactive, engaging, and personalized just for you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mic className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Voice-to-Voice Interaction</h3>
                  <p className="text-blue-100">Simply speak your questions and get instant audio responses. No typing required!</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Learning Assistant</h3>
                  <p className="text-blue-100">AI understands your learning pace and provides personalized explanations and tips.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Doubt Clearing</h3>
                  <p className="text-blue-100">Get instant answers to your questions anytime, anywhere. Your personal tutor never sleeps!</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
                  <p className="text-blue-100">Communicate in Hindi, English, or your preferred regional language for better understanding.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 rounded-2xl p-6 border border-blue-700">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Quick Start Guide
              </h4>
              <ol className="space-y-2 text-blue-100">
                <li>1. Click the "Talk to Me" button</li>
                <li>2. Ask your question clearly</li>
                <li>3. Listen to the detailed explanation</li>
                <li>4. Ask follow-up questions if needed</li>
              </ol>
            </div>
          </div>

          {/* Right Side - Interactive Demo */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="/image.png" 
                      alt="AI Assistant Cat" 
                      className="w-28 h-28 object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                      }}
                    />
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full hidden items-center justify-center">
                      <Brain className="w-14 h-14 text-white" />
                    </div>
                  </div>
                  
                  {/* Animated Voice Waves */}
                  <div className="absolute -inset-4 rounded-full border-4 border-blue-300 animate-ping opacity-30"></div>
                  <div className="absolute -inset-8 rounded-full border-4 border-blue-200 animate-ping opacity-20 animation-delay-300"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-blue-900">Hi! I'm your AI Study Buddy</h3>
                  <p className="text-blue-600">Ask me anything about your studies!</p>
                </div>

                {/* Sample Conversation */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-left">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <p className="text-sm text-blue-800"><strong>You:</strong> "Explain photosynthesis"</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3">
                    <p className="text-sm text-green-800"><strong>AI:</strong> "Photosynthesis is the process by which plants make their own food using sunlight, water, and carbon dioxide..."</p>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Mic className="w-5 h-5" />
                    <span>Start Talking</span>
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors flex items-center space-x-2">
                    <Headphones className="w-5 h-5" />
                    <span>Listen</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-white rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-white rounded-full opacity-30 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;