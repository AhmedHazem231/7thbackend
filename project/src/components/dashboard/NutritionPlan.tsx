import React from "react";
import { Utensils, Beef, Apple, Droplet } from "lucide-react";
import { FitnessMetrics } from "../../utils/types";

interface Props {
  metrics: FitnessMetrics;
}

export function NutritionPlan({ metrics }: Props) {
  const totalGrams =
    metrics.nutrition.protein + metrics.nutrition.carbs + metrics.nutrition.fat;
  const proteinPercentage = (metrics.nutrition.protein / totalGrams) * 100;
  const carbsPercentage = (metrics.nutrition.carbs / totalGrams) * 100;
  const fatPercentage = (metrics.nutrition.fat / totalGrams) * 100;

  const macros = [
    {
      name: "Protein",
      icon: Beef,
      value: metrics.nutrition.protein,
      percentage: proteinPercentage,
      color: "red",
    },
    {
      name: "Carbs",
      icon: Apple,
      value: metrics.nutrition.carbs,
      percentage: carbsPercentage,
      color: "yellow",
    },
    {
      name: "Fat",
      icon: Droplet,
      value: metrics.nutrition.fat,
      percentage: fatPercentage,
      color: "blue",
    },
  ];

  const totals = [
    {
      label: "Calories",
      value: metrics.calories.toFixed(0),
    },
    {
      label: "Total Macros",
      value: `${totalGrams}g`,
    },
    {
      label: "Meals/Day",
      value: "3",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Utensils className="h-6 w-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">
          Daily Nutrition Plan
        </h2>
      </div>

      <div className="space-y-6">
        {macros.map((macro) => {
          const Icon = macro.icon;
          return (
            <div key={macro.name} className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="flex items-center">
                  <Icon className={`h-5 w-5 text-${macro.color}-500 mr-2`} />
                  <span className="text-sm font-semibold text-gray-700">
                    {macro.name}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    {macro.value}g
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({macro.percentage.toFixed(0)}%)
                  </span>
                </div>
              </div>
              <div
                className={`overflow-hidden h-2 text-xs flex rounded bg-${macro.color}-100`}
              >
                <div
                  style={{ width: `${macro.percentage}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${macro.color}-500`}
                />
              </div>
            </div>
          );
        })}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Daily Totals
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {totals.map((total) => (
              <div key={total.label} className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {total.value}
                </p>
                <p className="text-xs text-gray-500">{total.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
