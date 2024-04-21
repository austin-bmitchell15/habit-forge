import CreateHabitModal from '@/components/HabitModals/CreateHabitModal';
import HabitService from '@/services/HabitService';
import { JWT, UserAttributeKey } from '@aws-amplify/auth';
import { Button, Dialog, DialogHeader } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import UserService from '@/services/UserService';
import HabitCard from '@/components/HabitCard';
import { Habit } from '@/utils/types/habits';
import * as subscriptions from '../../graphql/subscriptions';
import EditHabitModal from '@/components/HabitModals/EditHabitModal';
import {
  ActivityHabit,
  CreateActivityHabitInput,
  CreateGeneralHabitInput,
  CreateProgressiveHabitInput,
  DeleteActivityHabitInput,
  DeleteGeneralHabitInput,
  DeleteProgressiveHabitInput,
  DeleteWorkoutTemplateExerciseInput,
  DeleteWorkoutTemplateInput,
  GeneralHabit,
  HabitType,
  ProgressiveHabit,
  WorkoutTemplate,
} from '@/API';
import { generateClient } from 'aws-amplify/api';
import SearchModal from '@/components/WorkoutModals/SearchModal';
import WorkoutService from '@/services/WorkoutService';
import WorkoutCard from '@/components/WorkoutCard';
import { MyWorkoutTemplate } from '@/utils/types/exercises';
import CompleteWorkoutModal from '@/components/WorkoutModals/CompleteWorkoutModal';

export default function WorkoutPlanner() {
  const [showWorkoutCreationTemplate, setShowCreateWorkoutTemplate] =
    useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [workouts, setWorkouts] = useState<WorkoutTemplate[]>([]);
  const [showCompleteWorkout, setShowCompleteWorkout] =
    useState<boolean>(false);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchWorkouts = async () => {
      setLoading(true);
      setError(null);

      try {
        const workouts = await WorkoutService.getWorkouts();
        setWorkouts(workouts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  const [currWorkout, setCurrWorkout] = useState<MyWorkoutTemplate>(
    workouts[0] as MyWorkoutTemplate,
  );

  function deleteWorkout() {
    const input = {
        id: currWorkout.id
    }
    WorkoutService.deleteWorkoutTemplate(input as DeleteWorkoutTemplateInput)
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(showCompleteWorkout);

  return (
    <div className="flex flex-col flex-grow space-y-4 p-4">
      <SearchModal
        isOpen={showWorkoutCreationTemplate}
        onClose={setShowCreateWorkoutTemplate}
        setWorkouts={setWorkouts}
      />
      <CompleteWorkoutModal
        workout={currWorkout}
        isOpen={showCompleteWorkout}
        onClose={setShowCompleteWorkout}
      />
      <div className="grid grid-cols-3 gap-4">
        {workouts.map((workout, index) => (
          <WorkoutCard
            workout={workout as MyWorkoutTemplate}
            setShowCompleteWorkout={setShowCompleteWorkout}
            setCurrWorkout={setCurrWorkout}
            deleteWorkout={deleteWorkout}
          />
        ))}
      </div>
      <Button
        className="bg-deep-purple-200"
        onClick={() => setShowCreateWorkoutTemplate(true)}
      >
        Create Habit
      </Button>
    </div>
  );
}
