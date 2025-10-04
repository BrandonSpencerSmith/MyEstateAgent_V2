import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export default function StatsCard({ icon: Icon, label, value, color }: StatsCardProps) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600'
  };

  const iconColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
      <div className="flex items-center justify-center space-x-3">
        <div className={`${iconColor.split(' ')[0]} p-2 rounded-lg`}>
          <Icon className={`h-6 w-6 ${iconColor.split(' ')[1]}`} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
