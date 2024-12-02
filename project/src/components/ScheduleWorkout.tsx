import React, { useState } from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';

interface WorkoutSchedule {
  date: string;
  time: string;
  workout: string;
  duration: string;
}

function ScheduleWorkout() {
  const [schedules, setSchedules] = useState<WorkoutSchedule[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newSchedule, setNewSchedule] = useState<WorkoutSchedule>({
    date: '',
    time: '',
    workout: '',
    duration: '',
  });

  const workoutOptions = [
    'Upper Body Strength',
    'Lower Body Power',
    'Core & Abs',
    'HIIT Cardio',
    'Full Body Circuit',
    'Yoga & Flexibility',
    'Recovery & Stretching',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSchedules([...schedules, newSchedule]);
    setNewSchedule({ date: '', time: '', workout: '', duration: '' });
    setShowForm(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Schedule Workout</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Workout
        </button>
      </div>

      {showForm && (
        <div className="mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={newSchedule.date}
                  onChange={(e) =>
                    setNewSchedule({ ...newSchedule, date: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  required
                  value={newSchedule.time}
                  onChange={(e) =>
                    setNewSchedule({ ...newSchedule, time: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Workout Type
              </label>
              <select
                required
                value={newSchedule.workout}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, workout: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a workout</option>
                {workoutOptions.map((workout) => (
                  <option key={workout} value={workout}>
                    {workout}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                required
                min="15"
                step="15"
                value={newSchedule.duration}
                onChange={(e) =>
                  setNewSchedule({ ...newSchedule, duration: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Schedule
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {schedules.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No workouts scheduled. Add one to get started!
          </p>
        ) : (
          schedules.map((schedule, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{schedule.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{schedule.time}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">{schedule.workout}</p>
                <p className="text-sm text-gray-500">{schedule.duration} minutes</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ScheduleWorkout;