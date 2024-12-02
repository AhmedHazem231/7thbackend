import React from 'react';
import { Activity, Scale, Flame } from 'lucide-react';
import { FitnessMetrics } from '../utils/types';

interface Props {
  metrics: FitnessMetrics;
  onClose: () => void;
}

export function FitnessResults({ metrics, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Your Fitness Analysis
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Scale className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-700">BMI</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {metrics.bmi.toFixed(1)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-700">BMR</span>
              </div>
              <p className="text-2xl font-bold text-green-600">
                {metrics.bmr.toFixed(0)}
              </p>
              <p className="text-sm text-gray-600">kcal/day</p>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Flame className="h-5 w-5 text-orange-600" />
              <span className="font-semibold text-gray-700">
                Daily Calories
              </span>
            </div>
            <p className="text-2xl font-bold text-orange-600">
              {metrics.calories.toFixed(0)}
            </p>
            <p className="text-sm text-gray-600">kcal/day</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-3">
              Daily Nutrition Plan
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Protein</span>
                <span className="font-bold text-purple-600">
                  {metrics.nutrition.protein}g
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carbs</span>
                <span className="font-bold text-purple-600">
                  {metrics.nutrition.carbs}g
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fat</span>
                <span className="font-bold text-purple-600">
                  {metrics.nutrition.fat}g
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
