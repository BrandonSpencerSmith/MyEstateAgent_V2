import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  onBack: () => void;
}

export default function PageHeader({ onBack }: PageHeaderProps) {
  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm">Back to Home</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">MyEstateAgent</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
