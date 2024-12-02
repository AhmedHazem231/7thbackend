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

const ACTIVITY_MULTIPLIERS = {
  Sedentary: 1.2,
  Light: 1.375,
  Moderate: 1.55,
  Active: 1.725,
  'Very Active': 1.9,
};

const GOAL_MULTIPLIERS = {
  'Weight Loss': 0.8,
  Maintenance: 1,
  'Muscle Gain': 1.1,
};

export function calculateFitnessMetrics(data: FitnessData): FitnessMetrics {
  // Calculate BMI
  const heightInMeters = data.height / 100;
  const bmi = data.weight / (heightInMeters * heightInMeters);

  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age;
  bmr = data.gender === 'Male' ? bmr + 5 : bmr - 161;

  // Calculate TDEE
  const activityMultiplier = ACTIVITY_MULTIPLIERS[data.activityLevel];
  const tdee = bmr * activityMultiplier;

  // Calculate target calories based on goal
  const goalMultiplier = GOAL_MULTIPLIERS[data.goal];
  const calories = tdee * goalMultiplier;

  // Calculate macronutrients
  const protein = data.weight * 2; // 2g per kg of body weight
  const fat = data.weight; // 1g per kg of body weight
  const remainingCalories = calories - (protein * 4 + fat * 9); // 4 cal/g protein, 9 cal/g fat
  const carbs = Math.round(remainingCalories / 4); // 4 cal/g carbs

  return {
    bmi,
    bmr,
    tdee,
    calories,
    nutrition: {
      protein,
      carbs,
      fat,
    },
  };
}
