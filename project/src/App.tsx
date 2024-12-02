import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import BMICalculator from './components/BMICalculator';
import WorkoutPlans from './components/WorkoutPlans';
import DietPlans from './components/DietPlans';
import Auth from './components/Auth';
import HomePage from './components/HomePage';

export type UserData = {
  height: number;
  weight: number;
  bmi: number;
  workoutPlan: string;
  dietPlan: string;
  email?: string;
  name?: string;
};

function App() {
  const [phase, setPhase] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    height: 0,
    weight: 0,
    bmi: 0,
    workoutPlan: '',
    dietPlan: '',
  });

  if (isAuthenticated) {
    return (
      <HomePage userData={userData} setIsAuthenticated={setIsAuthenticated} />
    );
  }

  const renderPhase = () => {
    switch (phase) {
      case 1:
        return (
          <BMICalculator
            userData={userData}
            setUserData={setUserData}
            onNext={() => setPhase(2)}
          />
        );
      case 2:
        return (
          <WorkoutPlans
            userData={userData}
            setUserData={setUserData}
            onNext={() => setPhase(3)}
          />
        );
      case 3:
        return (
          <DietPlans
            userData={userData}
            setUserData={setUserData}
            onNext={() => setPhase(4)}
          />
        );
      case 4:
        return (
          <Auth
            userData={userData}
            setUserData={setUserData}
            setIsAuthenticated={setIsAuthenticated}
          />
        );
      default:
        return (
          <BMICalculator
            userData={userData}
            setUserData={setUserData}
            onNext={() => setPhase(2)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                FitLife Pro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {phase <= 3 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">
                    Phase {phase}/3
                  </span>
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`h-2 w-2 rounded-full ${
                          step === phase ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPhase()}
      </main>
    </div>
  );
}

export default App;
