import React, { useRef } from "react";
import { Dumbbell, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { UserData } from "../App";

interface Props {
  userData: UserData;
  setUserData: (data: UserData) => void;
  onNext: () => void;
}

const workoutPlans = [
  {
    id: "beginner",
    title: "Beginner Friendly",
    description: "3 days/week, focus on form and building habits",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
    schedule: ["Monday: Full Body", "Wednesday: Cardio", "Friday: Strength"],
    exercises: ["Bodyweight Squats", "Push-ups", "Planks", "Walking"],
  },
  {
    id: "intermediate",
    title: "Intermediate Build",
    description: "4 days/week, progressive overload training",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400",
    schedule: [
      "Monday: Upper Body",
      "Tuesday: Lower Body",
      "Thursday: Push",
      "Friday: Pull",
    ],
    exercises: ["Bench Press", "Deadlifts", "Pull-ups", "Leg Press"],
  },
  {
    id: "advanced",
    title: "Advanced Performance",
    description: "5-6 days/week, high intensity training",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400",
    schedule: [
      "Monday: Chest/Triceps",
      "Tuesday: Back/Biceps",
      "Wednesday: Legs",
      "Thursday: Shoulders",
      "Friday: Full Body",
      "Saturday: HIIT",
    ],
    exercises: ["Olympic Lifts", "Muscle-ups", "Power Cleans", "Box Jumps"],
  },
  {
    id: "strength",
    title: "Strength Focus",
    description: "4 days/week, heavy compound movements",
    image:
      "https://images.unsplash.com/flagged/photo-1564740930826-1aabf6c8a776?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schedule: [
      "Monday: Squat",
      "Tuesday: Bench",
      "Thursday: Deadlift",
      "Friday: OHP",
    ],
    exercises: ["Squats", "Bench Press", "Deadlifts", "Overhead Press"],
  },
  {
    id: "functional",
    title: "Functional Fitness",
    description: "5 days/week, focus on movement patterns",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=400",
    schedule: [
      "Monday: Push",
      "Tuesday: Pull",
      "Wednesday: Legs",
      "Thursday: Core",
      "Friday: Conditioning",
    ],
    exercises: [
      "Kettlebell Swings",
      "Turkish Get-ups",
      "Battle Ropes",
      "Medicine Ball Throws",
    ],
  },
];

function WorkoutPlans({ userData, setUserData, onNext }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <Dumbbell className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Choose Your Workout Plan
        </h2>
        <p className="text-gray-600">
          Select the plan that best matches your fitness level and goals
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 px-4 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {workoutPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-200 hover:scale-105 ${
                userData.workoutPlan === plan.id ? "ring-2 ring-blue-600" : ""
              }`}
              style={{ scrollSnapAlign: "start" }}
              onClick={() => setUserData({ ...userData, workoutPlan: plan.id })}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Schedule:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.schedule.map((day, index) => (
                      <li key={index}>{day}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <button
                    className={`px-6 py-2 rounded-lg ${
                      userData.workoutPlan === plan.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {userData.workoutPlan === plan.id
                      ? "Selected"
                      : "Select Plan"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {userData.workoutPlan && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
          >
            Continue to Diet Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkoutPlans;
