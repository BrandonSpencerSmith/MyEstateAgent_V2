import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export default function StatsCard({ icon: Icon, label, value, color }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm mx-auto">
      <div className="flex items-center justify-center space-x-3">
        <div className={`bg-${color}-100 p-2 rounded-lg`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
