import React, { useState, useEffect } from "react";
import { Activity, LogOut, Settings as SettingsIcon, User } from "lucide-react";
import { UserData } from "../types/user";
import ProgressChart from "./ProgressChart";
import ScheduleWorkout from "./ScheduleWorkout";
import Community from "./Community";
import Leaderboard from "./Leaderboard";
import FAQs from "./FAQs";
import SettingsPage from "./Settings";
import AIAssistant from "./AIAssistant";
import { FitnessMetricsForm } from "./FitnessMetricsForm";
import { FitnessResults } from "./FitnessResults";
import { LoadingProgress } from "./LoadingProgress";
import { calculateFitnessMetrics } from "../utils/api";
import { FitnessData, FitnessMetrics } from "../types/fitness";
import { Dashboard } from "./dashboard/Dashboard";
import { SuccessStories } from "./SuccessStories";
import { SubscriptionPlans } from "./SubscriptionPlans";
import BMICalculator from "./BMICalculator";
import DietPlans from "./DietPlans";
import WorkoutPlans from "./WorkoutPlans";
import { QuickActions } from "./QuickActions";

interface Props {
  userData: UserData;
  setIsAuthenticated: (value: boolean) => void;
}

function HomePage({ userData, setIsAuthenticated }: Props) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showMetricsForm, setShowMetricsForm] = useState(true);
  const [fitnessMetrics, setFitnessMetrics] = useState<FitnessMetrics | null>(
    () => {
      const savedMetrics = localStorage.getItem("fitnessMetrics");
      return savedMetrics ? JSON.parse(savedMetrics) : null;
    },
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSubscriptionPlans, setShowSubscriptionPlans] = useState(false);
  const [showFitnessResults, setShowFitnessResults] = useState(false);

  useEffect(() => {
    if (fitnessMetrics) {
      localStorage.setItem("fitnessMetrics", JSON.stringify(fitnessMetrics));
    }
  }, [fitnessMetrics]);

  const userProgress = {
    points: 1250,
    badges: [
      { name: "Early Bird", description: "Completed 5 morning workouts" },
      { name: "Strength Master", description: "Lifted 1000kg total" },
      { name: "Diet Guru", description: "Followed meal plan for 30 days" },
    ],
    streaks: 12,
    workoutsCompleted: 48,
  };

  const progressData = [
    { day: "Mon", workouts: 2, calories: 2200 },
    { day: "Tue", workouts: 1, calories: 2000 },
    { day: "Wed", workouts: 3, calories: 2400 },
    { day: "Thu", workouts: 2, calories: 2100 },
    { day: "Fri", workouts: 2, calories: 2300 },
    { day: "Sat", workouts: 1, calories: 1900 },
    { day: "Sun", workouts: 0, calories: 1800 },
  ];

  const handleMetricsSubmit = async (data: FitnessData) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const metrics = await calculateFitnessMetrics(data);
      setFitnessMetrics(metrics);
      setShowMetricsForm(false);
      setShowFitnessResults(true);
    } catch (err) {
      setError("Failed to calculate fitness metrics. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMetricsClose = () => {
    setShowFitnessResults(false);
  };

  const handleRecalculateMetrics = () => {
    setShowMetricsForm(true);
    setFitnessMetrics(null);
    localStorage.removeItem("fitnessMetrics");
  };

  const renderHomeContent = () => (
    <div className="space-y-6">
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {fitnessMetrics ? (
            <Dashboard
              metrics={fitnessMetrics}
              userProgress={userProgress}
              progressData={progressData}
              onRecalculateMetrics={handleRecalculateMetrics}
            />
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Progress
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Progress stats here */}
              </div>
              <ProgressChart data={progressData} />
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="w-64">
          <QuickActions onActionClick={setActiveSection} />
        </div>
      </div>

      {/* Success Stories */}
      <SuccessStories />

      {/* Subscription CTA */}
      <div className="text-center py-8">
        <button
          onClick={() => setShowSubscriptionPlans(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Upgrade Your Journey
        </button>
      </div>

      {/* Settings and Logout */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveSection("settings")}
            className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-gray-50 text-gray-700"
          >
            <SettingsIcon className="h-5 w-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-gray-50 text-red-600"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "schedule":
        return <ScheduleWorkout />;
      case "bmi":
        return <BMICalculator />;
      case "diet":
        return <DietPlans />;
      case "workout":
        return <WorkoutPlans />;
      case "community":
        return <Community userData={userData} />;
      case "leaderboard":
        return <Leaderboard />;
      case "faqs":
        return <FAQs />;
      case "settings":
        return <SettingsPage userData={userData} />;
      default:
        return renderHomeContent();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setActiveSection("home")}
            >
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                FitLife Pro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6 text-gray-600" />
                <span className="text-gray-700">{userData.name}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {showMetricsForm && !loading && (
        <FitnessMetricsForm
          onSubmit={handleMetricsSubmit}
          onClose={() => setShowMetricsForm(false)}
          loading={loading}
          error={error}
        />
      )}

      {loading && <LoadingProgress />}

      {fitnessMetrics && showFitnessResults && !loading && (
        <FitnessResults metrics={fitnessMetrics} onClose={handleMetricsClose} />
      )}

      <SubscriptionPlans
        isOpen={showSubscriptionPlans}
        onClose={() => setShowSubscriptionPlans(false)}
      />

      <AIAssistant />
    </div>
  );
}

export default HomePage;
