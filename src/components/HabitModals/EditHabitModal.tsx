import {
  HabitType,
  CreateProgressiveHabitInput,
  CreateActivityHabitInput,
  CreateGeneralHabitInput,
} from '@/API';
import HabitService from '@/services/HabitService';
import { Habit } from '@/utils/types/habits';
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
import { useState, useEffect } from 'react';

interface EditHabitModalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  habitData: {
    id: string;
    name: string;
    type: HabitType;
    goal?: number;
    unit?: string;
    sessionsPerWeek?: number;
    completed?: boolean | null;
  };
}

export default function EditHabitModal({
  open,
  setOpen,
  habitData,
}: EditHabitModalProps) {
    const [habitType, setHabitType] = useState<string>(habitData.type);
    const [name, setName] = useState<string>(habitData.name);
    const [unit, setUnit] = useState<string>(habitData.unit || '');
    const [sessionsPerWeek, setSessionsPerWeek] = useState<string>(
        habitData.sessionsPerWeek?.toString() || '',
    );
    const [goal, setGoal] = useState<string>(habitData.goal?.toString() || '');

    useEffect(() => {
        setHabitType(habitData.type);
        setName(habitData.name);
        setUnit(habitData.unit || '');
        setSessionsPerWeek(habitData.sessionsPerWeek?.toString() || '');
        setGoal(habitData.goal?.toString() || '');
    }, [habitData]);

    const handleClose = () => {
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
                id: habitData.id,
                name,
                type: HabitType.PROGRESSIVE,
                goal: parseFloat(goal),
                unit,
                currentProgress: 0, // Adjust as necessary
            };
            result = await HabitService.updateProgressiveHabit(
                input as CreateProgressiveHabitInput,
            );
            break;
            case HabitType.ACTIVITY:
            input = {
                id: habitData.id,
                name,
                type: HabitType.ACTIVITY,
                sessionsPerWeek: parseInt(sessionsPerWeek, 10),
                completedSessions: 0, // Adjust as necessary
            };
            result = await HabitService.updateActivityHabit(
                input as CreateActivityHabitInput,
            );
            break;
            case HabitType.GENERAL:
            input = {
                id: habitData.id,
                name,
                type: HabitType.GENERAL,
                completed: false, // Adjust as necessary
            };
            result = await HabitService.updateGeneralHabit(
                input as CreateGeneralHabitInput,
            );
            break;
        }
        console.log('Habit updated:', result);
        handleClose();
        } catch (error) {
        console.error('Error updating habit:', error);
        }

    return (
      <Dialog open={open} handler={handleClose}>
        <DialogHeader>Edit Habit</DialogHeader>
        <DialogBody className="flex flex-col space-y-4">
          <Input
            label="Name of Habit"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            value={habitType}
            label="Type of Habit"
            onChange={(e) => setHabitType(e as HabitType)}
            disabled={true} // Disable changing the habit type
          >
            <Option value={HabitType.PROGRESSIVE}>Progressive Habit</Option>
            <Option value={HabitType.ACTIVITY}>Activity Habit</Option>
            <Option value={HabitType.GENERAL}>General Habit</Option>
          </Select>
          {habitType === HabitType.PROGRESSIVE && (
            <>
              <Input
                label="Goal"
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
              <Input
                label="Unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </>
          )}
          {habitType === HabitType.ACTIVITY && (
            <Input
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
          <Button onClick={(e) => handleSubmit(e)}>Update Habit</Button>
        </DialogFooter>
      </Dialog>
    );
  }
}
