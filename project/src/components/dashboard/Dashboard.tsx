import React from "react";
import { MetricsOverview } from "./MetricsOverview";
import { NutritionPlan } from "./NutritionPlan";
import ProgressChart from "../ProgressChart";
import { FitnessMetrics } from "../../utils/types";
import { Trophy, Award, BarChart2, Dumbbell, RefreshCw } from "lucide-react";

interface Props {
  metrics: FitnessMetrics;
  userProgress: {
    points: number;
    badges: Array<{ name: string; description: string }>;
    streaks: number;
    workoutsCompleted: number;
  };
  progressData: Array<{
    day: string;
    workouts: number;
    calories: number;
  }>;
  onRecalculateMetrics: () => void;
}

export function Dashboard({
  metrics,
  userProgress,
  progressData,
  onRecalculateMetrics,
}: Props) {
  const progressCards = [
    {
      icon: Trophy,
      value: userProgress.points,
      label: "Points",
      color: "blue",
    },
    {
      icon: Award,
      value: userProgress.badges.length,
      label: "Badges",
      color: "purple",
    },
    {
      icon: BarChart2,
      value: userProgress.streaks,
      label: "Day Streak",
      color: "green",
    },
    {
      icon: Dumbbell,
      value: userProgress.workoutsCompleted,
      label: "Workouts",
      color: "orange",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <MetricsOverview metrics={metrics} />
        <button
          onClick={onRecalculateMetrics}
          className="flex items-center space-x-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Recalculate</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Your Progress
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {progressCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className={`text-center p-4 bg-${card.color}-50 rounded-lg transition-transform hover:scale-105`}
                  >
                    <Icon
                      className={`h-8 w-8 text-${card.color}-600 mx-auto mb-2`}
                    />
                    <p className={`text-2xl font-bold text-${card.color}-600`}>
                      {card.value}
                    </p>
                    <p className="text-sm text-gray-600">{card.label}</p>
                  </div>
                );
              })}
            </div>
            <ProgressChart data={progressData} />
          </div>
        </div>

        <div>
          <NutritionPlan metrics={metrics} />
        </div>
      </div>
    </div>
  );
}
