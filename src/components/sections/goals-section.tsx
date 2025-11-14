"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconCurrencyDollar,
  IconTarget,
  IconVideo,
  IconWorldWww,
  IconRocket,
  IconCalendar,
} from "@tabler/icons-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const goals = [
  {
    id: 1,
    icon: IconCurrencyDollar,
    text: "Start with a smaller budget",
  },
  {
    id: 2,
    icon: IconTarget,
    text: "Want consistency",
  },
  {
    id: 3,
    icon: IconVideo,
    text: "Want video at scale",
  },
  {
    id: 4,
    icon: IconWorldWww,
    text: "Need it all managed",
  },
  {
    id: 5,
    icon: IconRocket,
    text: "Want the best value",
  },
  {
    id: 6,
    icon: IconCalendar,
    text: "Only need one time",
  },
];

export default function GoalsSection({ onGoalsChange }: { onGoalsChange?: (selectedGoals: number[]) => void }) {
  const [selectedGoals, setSelectedGoals] = useState<number[]>([]);

  const toggleGoal = (goalId: number) => {
    const newSelectedGoals = selectedGoals.includes(goalId) 
      ? selectedGoals.filter(id => id !== goalId)
      : [...selectedGoals, goalId];
    
    setSelectedGoals(newSelectedGoals);
    onGoalsChange?.(newSelectedGoals);
  };

  return (
    <div className="py-6">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8"
          {...fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-body">
            I want to
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          {...fadeInUp}
        >
          {goals.map((goal, index) => {
            const isSelected = selectedGoals.includes(goal.id);
            return (
              <motion.div
                key={goal.id}
                className={`${
                  isSelected 
                    ? "bg-[#371ACA] border-[#371ACA] text-white" 
                    : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                } border rounded-full px-8 py-10 flex items-center gap-6 hover:shadow-lg transition-all duration-200 cursor-pointer h-16`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => toggleGoal(goal.id)}
              >
                <div className={`w-10 h-10 flex items-center justify-center text-lg ${
                  isSelected ? "text-white" : "text-gray-400"
                }`}>
                  <goal.icon className="w-7 h-7" />
                </div>
                <span className={`text-lg font-normal font-body leading-none ${
                  isSelected ? "text-white" : "text-gray-900 dark:text-white"
                }`}>
                  {goal.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
