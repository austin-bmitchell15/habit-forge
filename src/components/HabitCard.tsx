import React, { useState } from 'react';
import {
  ProgressiveHabit,
  ActivityHabit,
  GeneralHabit,
  HabitType,
} from '@/API';
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Input,
} from '@material-tailwind/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface HabitCardProps {
  habit: ProgressiveHabit | ActivityHabit | GeneralHabit;
  key: number;
  setCurrHabit: Function;
  showEdit: Function;
  onDelete: Function;
  onComplete: Function;
}

const HabitCard = ({
  habit,
  key,
  setCurrHabit,
  showEdit,
  onDelete,
  onComplete,
}: HabitCardProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <Card
      className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-3"
      key={key}
    >
      <div className="flex flex-row justify-between w-full">
        <div>
          <Typography variant="h5">{habit.name}</Typography>
          <Typography variant="small">
            {habit.type.charAt(0).toUpperCase() +
              habit.type.slice(1).toLowerCase()}
          </Typography>
        </div>
        <div className="flex space-x-2">
          {habit.type === HabitType.PROGRESSIVE && (
            <Input type='number' label='Enter Progress' placeholder='Enter Progress' onChange={(e) => setInputValue(e.target.value)}/>
          )}
          <IconButton
              className="flex-none w-12 h-12 bg-green-500"
              onClick={() => {
                setCurrHabit(habit);
                onComplete(inputValue);
              }}
            >
            <CheckCircleIcon />
          </IconButton>
          <IconButton
            className="flex-none w-12 h-12 bg-blue-500"
            aria-label="Edit habit"
            onClick={() => {
              setCurrHabit(habit);
              showEdit(true);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className="flex-none w-12 h-12 bg-red-500"
            aria-label="Delete habit"
            onClick={() => {
              onDelete(habit.id, habit.type);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default HabitCard;
