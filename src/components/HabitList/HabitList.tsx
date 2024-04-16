import { Habit } from '@/API';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { Grid } from '@mui/material';
import React from 'react';
import HabitCard from './HabitCard';
import { generateClient } from 'aws-amplify/api';
import * as subscriptions from '../../graphql/subscriptions';

interface HabitListProps {
  habits: Habit[];
}

const HabitList = ({ habits }: HabitListProps) => {
  const client = generateClient();
  
  const createSub = client
  .graphql({ query: subscriptions.onCreateHabit })
  .subscribe({
    next: ({ data }) => {
      client
      .graphql
    },
    error: (error) => console.warn(error)
  });

  return (
    <div className="flex flex-col flex-grow space-y-4 ">
      {habits.map((habit, index) => (
        <HabitCard habit={habit}/>
      ))}
    </div>
  );
};

export default HabitList;
