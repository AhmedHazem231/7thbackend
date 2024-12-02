import React, { useRef } from 'react';
import { Utensils, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { UserData } from '../App';

interface Props {
  userData: UserData;
  setUserData: (data: UserData) => void;
  onNext: () => void;
}

const dietPlans = [
  {
    id: 'balanced',
    title: 'Balanced Nutrition',
    description: 'Well-rounded meals with optimal macro distribution',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400',
    calories: '2000-2500',
    meals: ['Breakfast: Oatmeal with fruits', 'Lunch: Grilled chicken salad', 'Dinner: Salmon with quinoa'],
    macros: { protein: '30%', carbs: '40%', fats: '30%' }
  },
  {
    id: 'lowCarb',
    title: 'Low Carb',
    description: 'Higher protein and fats, reduced carbohydrates',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
    calories: '1800-2200',
    meals: ['Breakfast: Eggs and avocado', 'Lunch: Tuna salad', 'Dinner: Steak with vegetables'],
    macros: { protein: '35%', carbs: '20%', fats: '45%' }
  },
  {
    id: 'highProtein',
    title: 'High Protein',
    description: 'Focused on muscle growth and recovery',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=400',
    calories: '2200-2700',
    meals: ['Breakfast: Protein smoothie', 'Lunch: Chicken and rice', 'Dinner: Fish with sweet potato'],
    macros: { protein: '40%', carbs: '40%', fats: '20%' }
  },
  {
    id: 'mediterranean',
    title: 'Mediterranean Diet',
    description: 'Heart-healthy fats and whole foods',
    image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?auto=format&fit=crop&q=80&w=400',
    calories: '2000-2400',
    meals: ['Breakfast: Greek yogurt with honey', 'Lunch: Mediterranean salad', 'Dinner: Grilled fish with olive oil'],
    macros: { protein: '25%', carbs: '35%', fats: '40%' }
  },
  {
    id: 'plantBased',
    title: 'Plant-Based',
    description: 'Vegan-friendly, whole food nutrition',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    calories: '1900-2300',
    meals: ['Breakfast: Smoothie bowl', 'Lunch: Buddha bowl', 'Dinner: Lentil curry with rice'],
    macros: { protein: '20%', carbs: '50%', fats: '30%' }
  }
];

function DietPlans({ userData, setUserData, onNext }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <Utensils className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Choose Your Diet Plan
        </h2>
        <p className="text-gray-600">
          Select a nutrition plan that complements your workout routine
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 px-4 pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {dietPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-200 hover:scale-105 ${
                userData.dietPlan === plan.id ? 'ring-2 ring-blue-600' : ''
              }`}
              style={{ scrollSnapAlign: 'start' }}
              onClick={() => setUserData({ ...userData, dietPlan: plan.id })}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-2">{plan.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    Target calories: {plan.calories} kcal/day
                  </p>
                  <h4 className="font-semibold text-gray-700 mt-3 mb-2">Sample Meals:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.meals.map((meal, index) => (
                      <li key={index}>{meal}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <button
                    className={`px-6 py-2 rounded-lg ${
                      userData.dietPlan === plan.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {userData.dietPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {userData.dietPlan && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
          >
            Continue to Sign Up
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default DietPlans;