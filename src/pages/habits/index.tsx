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
  CreateGeneralHabitInput,
  CreateProgressiveHabitInput,
  DeleteActivityHabitInput,
  DeleteGeneralHabitInput,
  DeleteProgressiveHabitInput,
  GeneralHabit,
  HabitType,
  ProgressiveHabit,
} from '@/API';
import { generateClient } from 'aws-amplify/api';

export default function Habits() {
  const [showCreateHabitModal, setShowCreateHabitModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [showEditHabitModal, setShowEditHabitModal] = useState(false);

  useEffect(() => {
    const fetchHabits = async () => {
      setLoading(true);
      setError(null);

      try {
        const habits = await HabitService.getHabits();
        setHabits(habits);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
    const {
      createGeneralSub,
      createActivitySub,
      createProgressiveSub,
      deleteActivitySub,
      deleteGeneralSub,
      deleteProgressiveSub,
      updateActivitySub,
      updateProgressiveSub,
      updateGeneralSub,
    } = HabitService.habitChangeListener(setHabits);

    return () => {
      createGeneralSub.unsubscribe();
      createActivitySub.unsubscribe();
      createProgressiveSub.unsubscribe();
      deleteActivitySub.unsubscribe();
      deleteGeneralSub.unsubscribe();
      deleteProgressiveSub.unsubscribe();
      updateActivitySub.unsubscribe();
      updateProgressiveSub.unsubscribe();
      updateGeneralSub.unsubscribe();
    };
  }, []);

  const [currHabit, setCurrHabit] = useState<Habit>(habits[0]);

  function onDelete(id: string, habitType: HabitType) {
    const input = { id };
    switch (habitType) {
      case HabitType.PROGRESSIVE:
        HabitService.deleteProgressiveHabit(
          input as DeleteProgressiveHabitInput,
        );
        break;
      case HabitType.GENERAL:
        HabitService.deleteGeneralHabit(input as DeleteGeneralHabitInput);
        break;
      case HabitType.ACTIVITY:
        HabitService.deleteActivityHabit(input as DeleteActivityHabitInput);
        break;
    }
  }

  const onComplete = async(value: string) => {
    let input = {};
    let completedHabit : Habit;
    let result = null;
    switch (currHabit.type) {
      case HabitType.PROGRESSIVE:
        completedHabit = currHabit as ProgressiveHabit
        input = {
          id: completedHabit.id,
          name: completedHabit.name,
          type: completedHabit.type,
          goal: completedHabit.goal,
          unit: parseInt(value),
          currentProgress: completedHabit.currentProgress, // Adjust as necessary
        };
        result = await HabitService.updateProgressiveHabit(
          input as CreateProgressiveHabitInput,
        );
        break;
      case HabitType.ACTIVITY:
        completedHabit = currHabit as ActivityHabit
        input = {
          id: completedHabit.id,
          name: completedHabit.name,
          type: completedHabit.type,
          sessionsPerWeek: completedHabit.sessionsPerWeek,
          completedSessions: completedHabit.completedSessions ? completedHabit.completedSessions + 1 : 1,
        };
        result = await HabitService.updateProgressiveHabit(
          input as CreateProgressiveHabitInput,
        );
        break;
      case HabitType.GENERAL:
        completedHabit = currHabit as GeneralHabit
        input = {
          id: completedHabit.id,
          name: completedHabit.name,
          type: completedHabit.type,
          completed: !completedHabit.completed, // Adjust as necessary
        };
        result = await HabitService.updateGeneralHabit(
          input as CreateGeneralHabitInput,
        );
        break;
    }
    console.log('Habit updated:', result);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div className="flex flex-col flex-grow space-y-4 p-4">
        <CreateHabitModal
          open={showCreateHabitModal}
          setOpen={setShowCreateHabitModal}
        />
        <EditHabitModal
          habitData={{ ...currHabit }}
          open={showEditHabitModal}
          setOpen={setShowEditHabitModal}
        />
        <div className="flex flex-col w-full space-y-4 ">
          {habits.map((habit, index) => (
            <HabitCard
              habit={habit}
              key={index}
              setCurrHabit={setCurrHabit}
              showEdit={setShowEditHabitModal}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </div>
        <Button
          className="bg-deep-purple-200"
          onClick={() => setShowCreateHabitModal(true)}
        >
          Create Habit
        </Button>
      </div>
    );
  }
}
