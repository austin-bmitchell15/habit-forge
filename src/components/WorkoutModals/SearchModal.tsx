import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Card,
  CardBody,
  Select,
  Option,
  Button,
  Typography,
} from '@material-tailwind/react';
import CheckIcon from '@mui/icons-material/Check'; // Check icon for selected items
import { Exercise } from '@/API'; // Adjust if the path is different
import ExerciseService from '@/services/ExerciseService';
import { handler } from '@material-tailwind/react/types/components/dialog';
import PaginationComponent from './PaginationComponent';
import { value } from '@material-tailwind/react/types/components/chip';

// Define the categories and their respective parts
const BODY_PART_CATEGORIES: { [key: string]: string[] } = {
  Cardio: ['Cardiovascular System'],
  Back: ['Lats', 'Upper Back'],
  Shoulders: ['Delts', 'Serratus Anterior'],
  Legs: ['Abductors', 'Adductors', 'Calves', 'Glutes', 'Hamstrings', 'Quads'],
  Arms: ['Biceps', 'Forearms', 'Triceps'],
  Abs: ['Abs', 'Spine'],
};

const categoryKeys = Object.keys(BODY_PART_CATEGORIES); // Keys for the select options

interface SearchModalProps {
  isOpen: boolean;
  onClose: handler;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [paginatedExercises, setPaginatedExercises] = useState<Exercise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showNamingForm, setShowNamingForm] = useState<boolean>(false);
  const [workoutName, setWorkoutName] = useState('');

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
  }, [searchTerm, selectedCategory, exercises]);

  const updatePagination = () => {
    const filteredExercises = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' ||
          BODY_PART_CATEGORIES[selectedCategory].includes(
            exercise.primaryTarget,
          )),
    );
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    setPaginatedExercises(
      filteredExercises.slice(startIndex, startIndex + itemsPerPage),
    );
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
      <DialogHeader className="flex justify-between">
        Create New Exercises ({selectedIds.size} selected)
        {selectedIds.size > 0 && !showNamingForm && (
          <Button
            className="mt-4 p-2"
            variant="outlined"
            onClick={() => setShowNamingForm(true)}
          >
            Next Step
          </Button>
        )}
      </DialogHeader>
      <DialogBody className="flex flex-col space-y-4">
        {showNamingForm ? (
          <Input
            label="Workout Name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        ) : (
          <>
            <Input
              label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              label="Filter by Category"
              onChange={(filter: value) => {
                setSelectedCategory(filter as string);
              }}
              value={selectedCategory}
            >
              <Option value="">All Categories</Option>
              <Option value="Cardio">Cardio</Option>
              <Option value="Back">Back</Option>
              <Option value="Shoulders">Shoulders</Option>
              <Option value="Legs">Legs</Option>
              <Option value="Arms">Arms</Option>
              <Option value="Abs">Abs</Option>
            </Select>
            <div className="flex flex-col justify-center gap-4">
              {paginatedExercises.map((exercise) => (
                <Card
                  key={exercise.id}
                  className="p-2 cursor-pointer"
                  onClick={() => toggleSelection(exercise.id)}
                >
                  <CardBody className="p-2">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-col">
                        <Typography variant="h6">{exercise.name}</Typography>
                        <Typography variant="small">
                          {exercise.primaryTarget}
                        </Typography>
                      </div>
                      {selectedIds.has(exercise.id) && <CheckIcon />}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </>
        )}
      </DialogBody>
      <DialogFooter>
        {showNamingForm ? (
          <Button
            color="green"
            onClick={() => console.log(`Workout Named: ${workoutName}`)}
          >
            Save Workout
          </Button>
        ) : (
          <PaginationComponent
            items={exercises.filter(
              (exercise) =>
                exercise.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) &&
                (selectedCategory === '' ||
                  BODY_PART_CATEGORIES[selectedCategory].includes(
                    exercise.primaryTarget,
                  )),
            )}
            itemsPerPage={10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </DialogFooter>
    </Dialog>
  );
}
