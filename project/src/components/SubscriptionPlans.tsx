import React from "react";
import { X, Check } from "lucide-react";

interface SubscriptionPlanProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscriptionPlans({ isOpen, onClose }: SubscriptionPlanProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-4">
              $9.99<span className="text-sm font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Basic workout plans</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Progress tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Community access</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-xl p-6 bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
            <div className="bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4">
              $19.99<span className="text-sm font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Advanced workout plans</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Nutrition guidance</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Personal trainer chat</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Video tutorials</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Elite Plan */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Elite</h3>
            <p className="text-3xl font-bold mb-4">
              $29.99<span className="text-sm font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>All Pro features</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>1-on-1 coaching</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Customized meal plans</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
