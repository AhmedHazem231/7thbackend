import React, { useState } from 'react';
import { MessageSquare, Award, ThumbsUp } from 'lucide-react';
import { UserData } from '../App';

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
  comments: number;
  badges: string[];
  timestamp: string;
  group: string;
}

interface Props {
  userData: UserData;
}

function Community({ userData }: Props) {
  const [activeGroup, setActiveGroup] = useState('all');
  const [newPost, setNewPost] = useState('');

  const groups = [
    { id: 'all', name: 'All Posts' },
    { id: 'weightloss', name: 'Weight Loss' },
    { id: 'muscle', name: 'Muscle Gain' },
    { id: 'cardio', name: 'Cardio Fitness' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'motivation', name: 'Motivation' },
  ];

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: 'Sarah Johnson',
      content: 'Just completed my first 5K! Thanks to everyone for the support and motivation! 🏃‍♀️',
      likes: 24,
      comments: 8,
      badges: ['Early Bird', 'Cardio Master'],
      timestamp: '2 hours ago',
      group: 'cardio',
    },
    {
      id: 2,
      user: 'Mike Chen',
      content: 'New personal record on deadlifts today! 💪 Remember to always focus on form over weight.',
      likes: 45,
      comments: 12,
      badges: ['Strength Master', 'Form Expert'],
      timestamp: '4 hours ago',
      group: 'muscle',
    },
  ]);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: Post = {
      id: posts.length + 1,
      user: userData.name || 'Anonymous',
      content: newPost,
      likes: 0,
      comments: 0,
      badges: ['New Member'],
      timestamp: 'Just now',
      group: activeGroup === 'all' ? 'general' : activeGroup,
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const filteredPosts = activeGroup === 'all' 
    ? posts 
    : posts.filter(post => post.group === activeGroup);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Community</h2>
        
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 mb-6">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeGroup === group.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        <form onSubmit={handlePost} className="mb-8">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your fitness journey..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800">{post.user}</span>
                    {post.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {badge}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{post.timestamp}</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">
                  #{post.group}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6">
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{post.comments}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;