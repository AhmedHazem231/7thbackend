import React from "react";
import {
  Calendar,
  Scale,
  Utensils,
  Scroll,
  MessageSquare,
  Trophy,
} from "lucide-react";

interface QuickAction {
  name: string;
  icon: React.ElementType;
  section: string;
  color: string;
}

interface QuickActionsProps {
  onActionClick: (section: string) => void;
}

export function QuickActions({ onActionClick }: QuickActionsProps) {
  const quickActions: QuickAction[] = [
    {
      name: "Schedule Workout",
      icon: Calendar,
      section: "schedule",
      color: "text-blue-600",
    },
    {
      name: "BMI Calculator",
      icon: Scale,
      section: "bmi",
      color: "text-green-600",
    },
    {
      name: "Diet Plans",
      icon: Utensils,
      section: "diet",
      color: "text-orange-600",
    },
    {
      name: "Workout Plans",
      icon: Scroll,
      section: "workout",
      color: "text-purple-600",
    },
    {
      name: "Community",
      icon: MessageSquare,
      section: "community",
      color: "text-pink-600",
    },
    {
      name: "Leaderboard",
      icon: Trophy,
      section: "leaderboard",
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.section}
              onClick={() => onActionClick(action.section)}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group w-full"
            >
              <Icon
                className={`h-5 w-5 ${action.color} group-hover:scale-110 transition-transform duration-200`}
              />
              <span className="text-sm text-gray-700 group-hover:font-medium">
                {action.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
