import React, { FunctionComponent } from 'react';
import {
  Card,
  CardBody,
  Button,
  IconButton,
  CardFooter,
} from '@material-tailwind/react';
import { Exercise, WorkoutTemplate } from '@/API';
import { MyWorkoutTemplate } from '@/utils/types/exercises';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { handler } from '@material-tailwind/react/types/components/dialog';

interface WorkoutCardProps {
  workout: MyWorkoutTemplate;
  setShowCompleteWorkout: handler;
  setCurrWorkout: handler;
}

const MAX_DISPLAYED_EXERCISES = 5; // Max number of exercises to display

export default function WorkoutCard({
  workout,
  setShowCompleteWorkout,
  setCurrWorkout,
}: WorkoutCardProps) {
  function onComplete() {
    setCurrWorkout(workout);
    setShowCompleteWorkout(true);
  }

  return (
    <Card>
      <CardBody className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold">{workout.name}</h3>
        <div className="text-sm text-gray-500">
          Created: {new Date(workout.createdAt).toLocaleDateString()}
        </div>
        {workout.exercises && workout.exercises.items.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {workout.exercises.items
              .slice(0, MAX_DISPLAYED_EXERCISES)
              .map((exercise) => {
                const curr = exercise.exercise;
                return <li key={curr.id}>{curr.name}</li>;
              })}
            {workout.exercises.items.length > MAX_DISPLAYED_EXERCISES && (
              <li className="text-gray-400 italic">
                and {workout.exercises.items.length - MAX_DISPLAYED_EXERCISES}{' '}
                more...
              </li>
            )}
          </ul>
        ) : (
          <div className="text-gray-500 italic">No exercises listed.</div>
        )}
      </CardBody>
      <CardFooter className="flex justify-center w-full space-x-2">
        <IconButton
          className="flex-grow bg-green-500"
          onClick={() => {
            onComplete();
          }}
        >
          <CheckCircleIcon />
        </IconButton>
        <IconButton
          className="flex-grow bg-red-500"
          aria-label="Delete habit"
          onClick={() => {
            onDelete(workout.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardFooter>
    </Card>
  );
}
