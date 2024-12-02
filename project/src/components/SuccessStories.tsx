import React from "react";
import { Star } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      name: "Ahmed Hazem ",
      age: 28,
      achievement: "Lost 30 lbs in 6 months",
      testimonial:
        "FitLife Pro completely transformed my approach to fitness. The personalized workout plans and nutrition guidance made all the difference.",
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ali Ali",
      age: 35,
      achievement: "Gained 15 lbs muscle mass",
      testimonial:
        "The trainer support and detailed video tutorials helped me achieve my muscle building goals faster than I ever thought possible.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fathy Elwensh",
      age: 31,
      achievement: "Completed first marathon",
      testimonial:
        "From couch to marathon - FitLife Pro's structured training program and community support made this journey possible.",
      image:
        "https://images.unsplash.com/photo-1609307446757-488da3c17b40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="text-center">
            <img
              src={story.image}
              alt={story.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-blue-600 font-semibold mb-2">
              {story.achievement}
            </p>
            <p className="text-gray-600">{story.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
