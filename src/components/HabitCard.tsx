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
  Progress,
} from '@material-tailwind/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';

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
  const streakColor = (habit.streak ?? 0) > 0 ? 'red' : 'inherit';
  const today = new Date().toISOString().split('T')[0];

  return (
    <Card
      className={`w-full shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-3 ${habit.lastCompleted === today ? 'border-4 border-green-300' : ''}`}
      key={key}
    >
      <div className="flex flex-row justify-between w-full space-x-4">
        <div>
          <Typography variant="h5">{habit.name}</Typography>
          <Typography variant="small">
            {habit.type.charAt(0).toUpperCase() +
              habit.type.slice(1).toLowerCase()}
          </Typography>
        </div>
        <div className="flex flex-grow flex-col items-center">
          {habit.type === HabitType.PROGRESSIVE &&
            (habit as ProgressiveHabit).goal != 0 && (
              <>
                <Typography variant="small">
                  {'Goal: ' +
                    (habit as ProgressiveHabit).goal +
                    ' ' +
                    (habit as ProgressiveHabit).unit}
                </Typography>
                <Progress
                  value={Math.round(
                    (((habit as ProgressiveHabit).currentProgress ?? 0) /
                      ((habit as ProgressiveHabit).goal ?? 0)) *
                      100,
                  )}
                  color="purple"
                  label="completed"
                  size="lg"
                />
              </>
            )}
          {habit.type === HabitType.PROGRESSIVE &&
            (habit as ProgressiveHabit).goal == 0 && (
              <Typography variant="small">
                Please define a goal for this habit
              </Typography>
            )}
          {habit.type === HabitType.ACTIVITY &&
            (habit as ActivityHabit).sessionsPerWeek != 0 && (
              <>
                <Typography variant="small">
                  {((habit as ActivityHabit).completedSessions ?? 0) +
                    ' out of ' +
                    (habit as ActivityHabit).sessionsPerWeek +
                    ' completed'}
                </Typography>
                <Progress
                  value={Math.round(
                    (((habit as ActivityHabit).completedSessions ?? 0) /
                      ((habit as ActivityHabit).sessionsPerWeek ?? 0)) *
                      100,
                  )}
                  color="purple"
                  size="lg"
                />
              </>
            )}
          {habit.type === HabitType.ACTIVITY &&
            (habit as ActivityHabit).sessionsPerWeek == 0 && (
              <Typography variant="small">
                Please define a goal for this habit
              </Typography>
            )}
        </div>
        <div className="flex items-center">
          <WhatshotIcon style={{ color: streakColor }} />
          <Typography>{habit.streak ?? 0}</Typography>
        </div>
        <div className="flex space-x-2">
          {habit.type === HabitType.PROGRESSIVE && (
            <Input
              type="number"
              label="Enter Progress"
              placeholder="Enter Progress"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          )}
          <IconButton
            className="flex-none w-12 h-12 bg-green-500"
            onClick={() => {
              onComplete(habit, inputValue);
              if (habit.type === HabitType.PROGRESSIVE) {
                setInputValue('');
              }
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
