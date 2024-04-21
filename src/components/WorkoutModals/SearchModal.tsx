import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Card,
  CardBody,
} from '@material-tailwind/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import a checkmark icon
import { Exercise } from '@/API';
import ExerciseService from '@/services/ExerciseService';
import { handler } from '@material-tailwind/react/types/components/dialog';
import PaginationComponent from '../PaginationComponent';
import CheckIcon from '@mui/icons-material/Check';

interface SearchModalProps {
  isOpen: boolean;
  onClose: handler;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [paginatedExercises, setPaginatedExercises] = useState<Exercise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set()); // Stores the IDs of selected exercises

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedExercises = await ExerciseService.getExercises();
        setExercises(fetchedExercises);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch exercises');
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    updatePagination();
  }, [searchTerm, exercises]);

  useEffect(() => {
    updatePagination();
  }, [currentPage]);

  const updatePagination = () => {
    const filteredExercises = exercises.filter((exercise) =>
      exercise.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredExercises.slice(
      startIndex,
      startIndex + itemsPerPage,
    );
    setPaginatedExercises(paginatedItems);
  };

  const toggleSelection = (id: string) => {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(id)) {
      newSelectedIds.delete(id);
    } else {
      newSelectedIds.add(id);
    }
    setSelectedIds(newSelectedIds);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Dialog open={isOpen} handler={onClose}>
      <DialogHeader>
        Create New Exercises ({selectedIds.size} selected)
      </DialogHeader>
      <DialogBody className="flex flex-col space-y-4">
        <Input
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex flex-wrap justify-center gap-4"
        />
        <div className="flex flex-wrap justify-center gap-4">
          {paginatedExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className="flex flex-grow w-1/2 cursor-pointer mx-auto"
              onClick={() => toggleSelection(exercise.id)}
            >
              <CardBody>
                <div className="flex items-center justify-between">
                  {exercise.name}
                  {selectedIds.has(exercise?.id) && <CheckIcon />}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center">
        <PaginationComponent
          items={exercises.filter((exercise) =>
            exercise.name?.toLowerCase().includes(searchTerm.toLowerCase()),
          )}
          itemsPerPage={10}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </DialogFooter>
    </Dialog>
  );
}
