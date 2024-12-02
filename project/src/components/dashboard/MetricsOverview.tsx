import React from "react";
import { Scale, Brain, Activity, Flame } from "lucide-react";
import { FitnessMetrics } from "../../utils/types";

interface Props {
  metrics: FitnessMetrics;
}

export function MetricsOverview({ metrics }: Props) {
  const cards = [
    {
      label: "BMI",
      value: metrics.bmi.toFixed(1),
      subtitle: "Body Mass Index",
      icon: Scale,
      color: "blue",
    },
    {
      label: "BMR",
      value: metrics.bmr.toFixed(0),
      subtitle: "kcal/day",
      icon: Brain,
      color: "green",
    },
    {
      label: "TDEE",
      value: metrics.tdee.toFixed(0),
      subtitle: "kcal/day",
      icon: Activity,
      color: "orange",
    },
    {
      label: "Target",
      value: metrics.calories.toFixed(0),
      subtitle: "kcal/day",
      icon: Flame,
      color: "purple",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Fitness Metrics
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className={`bg-${card.color}-50 p-4 rounded-lg transition-transform hover:scale-105`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon className={`h-5 w-5 text-${card.color}-600`} />
                <span className="font-semibold text-gray-700">
                  {card.label}
                </span>
              </div>
              <p className={`text-3xl font-bold text-${card.color}-600`}>
                {card.value}
              </p>
              <p className="text-sm text-gray-600 mt-1">{card.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
