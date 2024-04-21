import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Input,
  Button,
} from '@material-tailwind/react';

// Assuming Exercise type and API fetching logic are defined elsewhere
import { handler } from '@material-tailwind/react/types/components/dialog';
import { Exercise } from '@/API';
import PaginationComponent from './PaginationComponent';
import { MyExercise, MyWorkoutTemplate } from '@/utils/types/exercises';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: handler;
  workout: MyWorkoutTemplate;
}

export default function CompleteWorkoutModal({
  isOpen,
  onClose,
  workout,
}: ExerciseModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sets, setSets] = useState<string>();
  const [reps, setReps] = useState<string>();
  const [weight, setWeights] = useState<string>();
  const exercises = workout?.exercises?.items
  const [paginatedExercises, setPaginatedExercises] = useState<MyExercise[]>([]);

  useEffect(() => {
    setCurrentPage(1);
    updatePagination();
  }, [exercises]);

  const updatePagination = () => {
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    if (exercises){
        setPaginatedExercises(
            exercises.slice(startIndex, startIndex + itemsPerPage),
          );
    }
  };

  const ITEMS_PER_PAGE = 5;

  const handleComplete = () => {
    console.log('Sets', sets);
    console.log('Reps', reps);
    console.log('Weights', weight);
    onClose(false);
  };

  return (
    <Dialog open={isOpen} handler={onClose}>
      <DialogHeader>Log Exercise Details</DialogHeader>
      <DialogBody>
        {paginatedExercises.map((exercise: MyExercise) => (
          <div key={exercise.exercise.name} className="flex flex-col mb-4">
            <span className="font-semibold">{exercise.exercise.name}</span>
            <div className="flex space-x-2">
              <Input
                type="number"
                label="Sets"
                placeholder="Sets"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
              />
              <Input
                type="number"
                label="Reps"
                placeholder="Reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
              />
              <Input
                type="number"
                label="Weight"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeights(e.target.value)}
              />
            </div>
          </div>
        ))}
      </DialogBody>
      <DialogFooter className='flex space-x-4'>
        <Button color="blue" onClick={handleComplete}>
          Complete
        </Button>
        {exercises && (
            <PaginationComponent
            items={exercises}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </DialogFooter>
    </Dialog>
  );
}
