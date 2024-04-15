import { Habit } from '@/API';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { Grid } from '@mui/material';
import React from 'react';

interface HabitListProps {
  habits: Habit[];
}

const HabitList = ({ habits }: HabitListProps) => {
  return (
    <Grid container spacing={2} className="p-4">
      {habits.map((habit, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} className="p-2">
          <Card className="max-w-sm mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardBody>
              <Typography variant="h5">{habit.name}</Typography>
            </CardBody>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HabitList;
