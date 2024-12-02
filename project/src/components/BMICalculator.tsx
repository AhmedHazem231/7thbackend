import React, { useState } from "react";
import { CalculatorIcon, ArrowRight } from "lucide-react";
import { UserData } from "../App";

interface Props {
  userData: UserData;
  setUserData: (data: UserData) => void;
  onNext: () => void;
}

function BMICalculator({ userData, setUserData, onNext }: Props) {
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInMeters = userData.height / 100;
    const bmi = userData.weight / (heightInMeters * heightInMeters);
    setUserData({ ...userData, bmi });
    setShowResult(true);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5)
      return { category: "Underweight", color: "text-yellow-600" };
    if (bmi < 25) return { category: "Normal weight", color: "text-green-600" };
    if (bmi < 30) return { category: "Overweight", color: "text-orange-600" };
    return { category: "Obese", color: "text-red-600" };
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <CalculatorIcon className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Let's Calculate Your BMI
        </h2>

        <form onSubmit={calculateBMI} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              required
              value={userData.height || ""}
              onChange={(e) =>
                setUserData({ ...userData, height: Number(e.target.value) })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your height"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              required
              value={userData.weight || ""}
              onChange={(e) =>
                setUserData({ ...userData, weight: Number(e.target.value) })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your weight"
            />
          </div>

          {!showResult && (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Calculate BMI
            </button>
          )}
        </form>

        {showResult && (
          <div className="mt-6 text-center">
            <div className="mb-4">
              <p className="text-lg font-medium text-gray-700">Your BMI is:</p>
              <p className="text-3xl font-bold text-blue-600">
                {userData.bmi.toFixed(1)}
              </p>
              <p
                className={`text-lg font-medium ${
                  getBMICategory(userData.bmi).color
                }`}
              >
                {getBMICategory(userData.bmi).category}
              </p>
            </div>

            <button
              onClick={onNext}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            >
              Continue to Workout Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
