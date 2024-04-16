import React from 'react';
import { Habit, HabitType } from '@/API';
import { Card, CardBody, Typography, IconButton } from '@material-tailwind/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface HabitCardProps {
  habit: Habit;
  key: number;
  showEdit: Function;
  showDelete: Function;
  showComplete: Function;
}

const HabitCard = ({ habit, key, showEdit, showDelete, showComplete }: HabitCardProps) => {
  const renderCompleteButton = () => {
    let tooltip = "";
    switch (habit.type) {
      case HabitType.PROGRESSIVE:
        tooltip = "Update Progress";
        break;
      case HabitType.ACTIVITY:
        tooltip = "Mark Activity Complete";
        break;
      case HabitType.GENERAL:
        tooltip = "Mark as Done";
        break;
      default:
        tooltip = "Complete";
        break;
    }

    return (
      <IconButton
        color="green"
        aria-label={tooltip}
        onClick={() => showComplete(true)}
      >
        <CheckCircleIcon />
      </IconButton>
    );
  };

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-3" key={key}>
      <div className="flex flex-row w-full">
        <div className='flex-1'>
          <Typography variant="h5">{habit.name}</Typography>
          <Typography variant='small'>{habit.type.charAt(0).toUpperCase() + habit.type.slice(1).toLowerCase()}</Typography>
        </div>
        <div className='space-x-2'>
          {renderCompleteButton()}
          <IconButton color="blue" aria-label="Edit habit" onClick={() => showEdit(true)}>
            <EditIcon />
          </IconButton>
          <IconButton color="red" aria-label="Delete habit" onClick={() => showDelete(true)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default HabitCard;
