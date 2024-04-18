import {
  CreateActivityHabitInput,
  CreateGeneralHabitInput,
  CreateProgressiveHabitInput,
  HabitType,
} from '@/API';
import HabitService from '@/services/HabitService';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
} from '@material-tailwind/react';
import { useState } from 'react';

interface CreateHabitModalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function CreateHabitModal({
  open,
  setOpen,
}: CreateHabitModalProps) {
  const [habitType, setHabitType] = useState<HabitType>(HabitType.GENERAL);
  const [name, setName] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [sessionsPerWeek, setSessionsPerWeek] = useState<string>('');
  const [goal, setGoal] = useState<string>('0');

  const handleClose = () => {
    setHabitType(HabitType.GENERAL);
    setName('');
    setUnit('');
    setSessionsPerWeek('');
    setOpen(false);
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    try {
      let input = {};
      let result = null;
      switch (habitType) {
        case HabitType.PROGRESSIVE:
          input = {
            name,
            type: HabitType.PROGRESSIVE,
            goal: parseFloat(goal), // Assuming goal is a numeric value
            unit,
            currentProgress: 0, // Assuming a default start value of 0
            streak: 0,
          };
          result = await HabitService.createProgressiveHabit(
            input as CreateProgressiveHabitInput,
          );
          break;
        case HabitType.ACTIVITY:
          input = {
            name,
            type: HabitType.ACTIVITY,
            sessionsPerWeek: parseInt(sessionsPerWeek, 10),
            completedSessions: 0, // Assuming a default start value of 0
            streak: 0,
          };
          result = await HabitService.createActivityHabit(
            input as CreateActivityHabitInput,
          );
          break;
        case HabitType.GENERAL:
          input = {
            name,
            type: HabitType.GENERAL,
            completed: false, // Assuming a default start value of false
            streak: 0,
          };
          result = await HabitService.createGeneralHabit(
            input as CreateGeneralHabitInput,
          );
          break;
      }
      console.log('Habit created:', result);
      handleClose();
    } catch (error) {
      console.error('Error creating habit:', error);
    }
  };

  return (
    <Dialog open={open} handler={handleClose}>
      <DialogHeader>Add New Habit</DialogHeader>
      <DialogBody className="flex flex-col space-y-4">
        <Input
          className=""
          label="Name of Habit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          value={habitType}
          label="Type of Habit"
          onChange={(val) =>
            setHabitType(
              val as
                | HabitType.PROGRESSIVE
                | HabitType.ACTIVITY
                | HabitType.GENERAL,
            )
          }
        >
          <Option value={HabitType.PROGRESSIVE}>Progressive Habit</Option>
          <Option value={HabitType.ACTIVITY}>Activity Habit</Option>
          <Option value={HabitType.GENERAL}>General Habit</Option>
        </Select>
        {habitType === HabitType.PROGRESSIVE && (
          <>
            <Input
              className=""
              label="Goal"
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <Input
              className=""
              label="Unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </>
        )}
        {habitType === HabitType.ACTIVITY && (
          <Input
            className="my-3"
            label="Sessions Per Week"
            type="number"
            value={sessionsPerWeek}
            onChange={(e) => setSessionsPerWeek(e.target.value)}
          />
        )}
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={(e) => handleSubmit(e)}>Save Habit</Button>
      </DialogFooter>
    </Dialog>
  );
}
