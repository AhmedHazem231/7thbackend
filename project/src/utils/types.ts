export interface FitnessData {
  weight: number;
  height: number;
  gender: 'Male' | 'Female';
  age: number;
  activityLevel: 'Sedentary' | 'Light' | 'Moderate' | 'Active' | 'Very Active';
  workoutLocation: 'Home' | 'Gym';
  goal: 'Weight Loss' | 'Maintenance' | 'Muscle Gain';
}

export interface FitnessMetrics {
  bmi: number;
  bmr: number;
  tdee: number;
  calories: number;
  nutrition: {
    protein: number;
    carbs: number;
    fat: number;
  };
}
