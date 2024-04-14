import { ActivityDetailsInput, CreateHabitInput, GeneralDetailsInput, HabitDetailsInput, HabitType, ProgressiveDetailsInput } from '@/API';
import { createHabit } from '@/graphql/mutations';
import HabitService from '@/services/HabitService';
import { HabitTypes } from '@/utils/types/habit';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  MenuItem,
  Option,
  Select,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import { MouseEventHandler, useState } from 'react';

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

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    let details: HabitDetailsInput = {};

    switch (habitType) {
        case 'PROGRESSIVE':
            details.progressiveDetails = {
                goal: parseFloat(goal),
                unit: unit,
                currentProgress: 0 // default starting progress
            } as ProgressiveDetailsInput;
            break;
        case 'ACTIVITY':
            details.activityDetails = {
                sessionsPerWeek: parseInt(sessionsPerWeek),
                completedSessions: 0 // default starting sessions
            } as ActivityDetailsInput;
            break;
    }

    const habitData: CreateHabitInput = {
        name,
        type: habitType,
        details
    };
    try {
      const newHabit = await HabitService.createHabit(habitData);
      console.log('Success:', newHabit);
    } catch (err) {
      console.error('Error creating habit:', err);
    }
    handleClose();
  };

  const handleClose = () => {
    setHabitType(HabitType.GENERAL);
    setName('');
    setUnit('');
    setSessionsPerWeek('');
    setOpen(false);
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
          onChange={(val) => setHabitType(val as HabitType.PROGRESSIVE | HabitType.ACTIVITY | HabitType.GENERAL)}
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
