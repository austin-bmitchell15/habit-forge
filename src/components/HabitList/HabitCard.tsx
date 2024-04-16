import React from 'react';
import { Habit, HabitType } from '@/API';
import { Card, CardBody, Typography, IconButton } from '@material-tailwind/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
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
        onClick={() => console.log("complete")}
      >
        <CheckCircleIcon />
      </IconButton>
    );
  };

  return (
    <Card className="w-full mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardBody className="flex flex-col items-start">
        <div className="flex justify-between w-full">
          <Typography variant="h5" className="flex-1 px-4">{habit.name}</Typography>
          <div className='space-x-2'>
            {renderCompleteButton()}
            <IconButton color="blue" aria-label="Edit habit" onClick={() => console.log("Edit")}>
              <EditIcon />
            </IconButton>
            <IconButton color="red" aria-label="Delete habit" onClick={() => console.log("Delete")}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default HabitCard;
