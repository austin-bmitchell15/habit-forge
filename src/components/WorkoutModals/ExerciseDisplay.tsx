import React from 'react';
import { Dialog, DialogBody, DialogHeader, Button } from '@material-tailwind/react';
import { Exercise } from '@/API';
import { handler } from '@material-tailwind/react/types/components/dialog';

interface ExerciseInfoProps {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: handler;
}

export default function ExerciseDisplay({ exercise, isOpen, onClose } : ExerciseInfoProps) {
  return (
    <Dialog open={isOpen} handler={() => onClose(false)}>
      <DialogHeader>Exercise Details</DialogHeader>
      <DialogBody>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold mb-2">{exercise?.name}</h3>
          <img src={exercise?.gifUrl} alt={exercise?.name} style={{ width: '200px', height: 'auto' }}/>
          <ul className="list-disc list-inside">
            {exercise?.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </DialogBody>
      <Button color="blue" onClick={() => onClose(false)} className="m-4">
        Close
      </Button>
    </Dialog>
  );
};
