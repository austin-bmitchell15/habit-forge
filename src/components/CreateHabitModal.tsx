import { HabitTypes } from "@/utils/types/habit";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, MenuItem, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { MouseEventHandler, useState } from "react";

interface CreateHabitModalProps {
  open : boolean;
  setOpen : (val : boolean) => void;
}

export default function CreateHabitModal({ open, setOpen } : CreateHabitModalProps) {
  const [habitType, setHabitType] = useState<string | undefined>('');
  const [goal, setGoal] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [sessionsPerWeek, setSessionsPerWeek] = useState<string>('');

  const handleSubmit = (event : MouseEvent) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log({ habitType, goal, unit, sessionsPerWeek });
      handleClose();
  };
  
  const handleClose = () => {
    setHabitType('');
    setGoal('');
    setUnit('');
    setSessionsPerWeek('');
    setOpen(false);
  };

  return (
    <Dialog open={open} handler={handleClose}>
        <DialogHeader>Add New Habit</DialogHeader>
        <DialogBody className="flex flex-col space-y-4">
          <Select
              value={habitType}
              label="Type of Habit"
              onChange={(val) => setHabitType(val)}
          >
              <Option value={HabitTypes.Progressive}>Progressive Habit</Option>
              <Option value={HabitTypes.Activity}>Activity Habit</Option>
              <Option value={HabitTypes.General}>General Habit</Option>
          </Select>
          {habitType === HabitTypes.Progressive && (
              <>
                  <Input
                    className=""
                    label="Goal"
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
          {habitType === HabitTypes.Activity && (
              <Input
                className="my-3"
                label="Sessions Per Week"
                type="number"
                value={sessionsPerWeek}
                onChange={(e) => setSessionsPerWeek(e.target.value)}
              />
          )}
          {habitType === HabitTypes.General && (
              <Input
                className="my-3"
                label="Description"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
          )}
        </DialogBody>
        <DialogFooter className="space-x-2">
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            <Button onClick={(e) => handleSubmit(e)}>Save Habit</Button>
        </DialogFooter>
    </Dialog>
  );
}