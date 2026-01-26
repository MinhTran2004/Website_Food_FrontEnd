
import React from 'react';

interface FoodBadgeProps {
  label: string;
}

const FoodBadge: React.FC<FoodBadgeProps> = ({ label }) => (
  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-orange-400 to-rose-400 text-white shadow-lg shadow-orange-500/20">
    <span className="mr-1.5 flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
    </span>
    {label}
  </span>
);

export default FoodBadge;
