export interface FitnessData {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
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