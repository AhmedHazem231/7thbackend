import React from 'react';
import { Activity, User } from 'lucide-react';
import { UserData } from '../../types/user';

interface Props {
  userData: UserData;
  onSectionChange: (section: string) => void;
}

export function Header({ userData, onSectionChange }: Props) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onSectionChange('home')}
          >
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              FitLife Pro
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-gray-600" />
              <span className="text-gray-700">{userData.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}