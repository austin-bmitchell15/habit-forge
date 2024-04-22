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
  Checkbox,
} from '@material-tailwind/react';
import CheckIcon from '@mui/icons-material/Check'; // Check icon for selected items
import {
  CreateWorkoutTemplateExerciseInput,
  CreateWorkoutTemplateInput,
  Exercise,
  WorkoutTemplate,
} from '@/API'; // Adjust if the path is different
import ExerciseService from '@/services/ExerciseService';
import { handler } from '@material-tailwind/react/types/components/dialog';
import PaginationComponent from './PaginationComponent';
import { value } from '@material-tailwind/react/types/components/chip';
import WorkoutService from '@/services/WorkoutService';
import ExerciseDisplay from './ExerciseDisplay';

// Define the categories and their respective parts
const BODY_PART_CATEGORIES: { [key: string]: string[] } = {
  Cardio: ['Cardiovascular System'],
  Back: ['Lats', 'Upper Back'],
  Shoulders: ['Delts', 'Serratus Anterior'],
  Legs: ['Abductors', 'Adductors', 'Calves', 'Glutes', 'Hamstrings', 'Quads'],
  Arms: ['Biceps', 'Forearms', 'Triceps'],
  Abs: ['Abs', 'Spine'],
  Chest: ['Pectorals'],
};

interface SearchModalProps {
  isOpen: boolean;
  onClose: handler;
  setWorkouts: Function;
  onSelectedExercise: (exercise: Exercise) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  setWorkouts,
  onSelectedExercise,
}: SearchModalProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [paginatedExercises, setPaginatedExercises] = useState<Exercise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showNamingForm, setShowNamingForm] = useState<boolean>(false);
  const [workoutName, setWorkoutName] = useState<string>('');

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

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    try {
      const workoutInput: CreateWorkoutTemplateInput = {
        name: workoutName,
      };
      const workout = await WorkoutService.createWorkout(workoutInput);
      const arrayIds = Array.from(selectedIds);
      for (const selectedId of arrayIds) {
        const workoutExerciseInput: CreateWorkoutTemplateExerciseInput = {
          workoutTemplateId: workout.data.createWorkoutTemplate.id,
          exerciseId: selectedId,
        };
        const workoutExercise =
          await WorkoutService.createWorkoutExercise(workoutExerciseInput);
      }
      setWorkouts((prevWorkouts: [WorkoutTemplate]) => [
        ...prevWorkouts,
        workout,
      ]);
      onClose(false);
    } catch (error) {
      console.error('Error creating habit:', error);
    }
  };

  const updatePagination = () => {
    const filteredExercises = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' ||
          BODY_PART_CATEGORIES[selectedCategory].includes(
            exercise.primaryTarget,
          )),
    );
    const itemsPerPage = 5;
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
    <>
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
                <Option value="Abs">Abs</Option>
                <Option value="Arms">Arms</Option>
                <Option value="Back">Back</Option>
                <Option value="Cardio">Cardio</Option>
                <Option value="Chest">Chest</Option>
                <Option value="Shoulders">Shoulders</Option>
                <Option value="Legs">Legs</Option>
              </Select>
              <div className="flex flex-col justify-center gap-4">
                {paginatedExercises.map((exercise) => (
                  <Card key={exercise.id} className="p-2 cursor-pointer">
                    <CardBody className="p-2">
                      <div className="flex flex-row items-center justify-between">
                        <div
                          className="flex flex-col"
                          onClick={() => {
                            onSelectedExercise(exercise);
                          }}
                        >
                          <Typography variant="h6">{exercise.name}</Typography>
                          <Typography variant="small">
                            {exercise.primaryTarget}
                          </Typography>
                        </div>
                        <Checkbox
                          onClick={() => toggleSelection(exercise.id)}
                        />
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
            <Button color="green" onClick={handleSubmit}>
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
              itemsPerPage={5}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
}
