import { FitnessData, FitnessMetrics } from './types';

export const calculateFitnessMetrics = async (
  data: FitnessData
): Promise<FitnessMetrics> => {
  // Simulate API call with realistic calculations
  const { weight, height, age, gender, activityLevel } = data;

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Calculate BMR using Mifflin-St Jeor Equation
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate TDEE based on activity level
  const activityMultipliers: { [key: string]: number } = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const tdee = bmr * (activityMultipliers[activityLevel] || 1.2);

  // Calculate target calories based on goal
  const calories = tdee;

  // Calculate macronutrient split (40/30/30)
  const nutrition = {
    protein: Math.round((calories * 0.3) / 4), // 30% protein (4 calories per gram)
    carbs: Math.round((calories * 0.4) / 4), // 40% carbs (4 calories per gram)
    fat: Math.round((calories * 0.3) / 9), // 30% fat (9 calories per gram)
  };

  return {
    bmi: Math.round(bmi * 10) / 10,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    calories: Math.round(calories),
    nutrition,
  };
};
