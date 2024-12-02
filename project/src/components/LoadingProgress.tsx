import React from 'react';
import { Loader2Icon } from 'lucide-react';

export function LoadingProgress() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="animate-spin mb-6">
          <Loader2Icon className="h-12 w-12 text-blue-600 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Analyzing Your Data
        </h2>
        <div className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full animate-progress"></div>
          </div>
          <p className="text-gray-600">
            We're working on your personalized fitness plan...
          </p>
        </div>
      </div>
    </div>
  );
}
