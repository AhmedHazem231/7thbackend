import React, { useState } from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  user: string;
  points: number;
  badges: string[];
  workouts: number;
  streak: number;
}

function Leaderboard() {
  const [timeframe, setTimeframe] = useState('week');

  const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      user: 'Sarah Johnson',
      points: 2500,
      badges: ['Elite Athlete', 'Consistency King'],
      workouts: 28,
      streak: 21,
    },
    {
      rank: 2,
      user: 'Mike Chen',
      points: 2350,
      badges: ['Strength Master', 'Early Bird'],
      workouts: 25,
      streak: 18,
    },
    {
      rank: 3,
      user: 'Emma Wilson',
      points: 2200,
      badges: ['Cardio Queen', 'Nutrition Pro'],
      workouts: 24,
      streak: 15,
    },
    // Add more entries as needed
  ];

  const timeframes = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'allTime', label: 'All Time' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />;
      default:
        return <span className="text-gray-500 font-medium">{rank}</span>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
          <div className="flex space-x-2">
            {timeframes.map((tf) => (
              <button
                key={tf.id}
                onClick={() => setTimeframe(tf.id)}
                className={`px-4 py-2 rounded-lg ${
                  timeframe === tf.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 flex justify-center">
                  {getRankIcon(entry.rank)}
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800">
                      {entry.user}
                    </span>
                    {entry.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {entry.workouts} workouts • {entry.streak} day streak
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600">
                  {entry.points}
                </div>
                <div className="text-sm text-gray-500">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;