import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

function FAQs() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'workouts', name: 'Workouts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'progress', name: 'Progress Tracking' },
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with FitLife Pro?',
      answer:
        'Getting started is easy! First, complete your profile by entering your height and weight. Then, choose a workout plan that matches your fitness level and goals. Finally, select a diet plan that complements your workout routine.',
      category: 'general',
    },
    {
      question: 'How often should I work out?',
      answer:
        'The frequency of your workouts depends on your fitness level and goals. For beginners, we recommend 3-4 days per week with rest days in between. More advanced users might work out 5-6 days per week. Always listen to your body and allow proper recovery time.',
      category: 'workouts',
    },
    {
      question: 'What should I eat before and after workouts?',
      answer:
        'Pre-workout: Eat a meal with carbs and protein 2-3 hours before exercise, or a small snack 30 minutes before. Post-workout: Consume protein and carbs within 30 minutes after exercise to aid recovery and muscle growth.',
      category: 'nutrition',
    },
    {
      question: 'How do I track my progress effectively?',
      answer:
        'FitLife Pro offers multiple ways to track progress: daily workout logs, body measurements, progress photos, and performance metrics. Consistency in tracking is key to seeing patterns and making adjustments to your routine.',
      category: 'progress',
    },
  ];

  const filteredFAQs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="flex overflow-x-auto hide-scrollbar space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-700">
            Can't find what you're looking for?{' '}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Contact our support team
            </span>{' '}
            or check our detailed documentation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
