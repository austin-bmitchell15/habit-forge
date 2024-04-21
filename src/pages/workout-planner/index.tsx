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
  const today = new Date().toISOString().split('T')[0];

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

  function isConsecutiveDay(
    currentDateString: string,
    lastDateString: string,
  ): boolean {
    const dayInMs = 1000 * 60 * 60 * 24;
    const currentDate = new Date(currentDateString);
    const lastDate = new Date(lastDateString);
    currentDate.setHours(0, 0, 0, 0);
    lastDate.setHours(0, 0, 0, 0);
    const difference = currentDate.getTime() - lastDate.getTime();
    return difference === dayInMs;
  }

  function getNextWeekStartDate(date: Date): Date {
    const nextWeek = new Date(date);
    nextWeek.setDate(date.getDate() - date.getDay() + 7); // Assuming Sunday as the start of the next week
    return nextWeek;
  }

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

  const onComplete = async (habit: Habit, value: string) => {
    let input = {};
    let completedHabit: Habit;
    let result = null;
    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    switch (habit.type) {
      case HabitType.PROGRESSIVE:
        completedHabit = habit as ProgressiveHabit;
        const newProgress = parseInt(value) < 0 ? 0 : parseInt(value);
        const currentProgress = completedHabit.currentProgress
          ? completedHabit.currentProgress + newProgress
          : newProgress;
        const completed = currentProgress >= completedHabit.goal;
        streak = habit.streak ?? 0;
        if (completed) {
          if (
            habit.lastCompleted &&
            isConsecutiveDay(today, habit.lastCompleted)
          ) {
            streak += 1;
          } else {
            streak = 1; // Reset streak if not consecutive
          }
        }
        input = {
          id: completedHabit.id,
          name: completedHabit.name,
          type: completedHabit.type,
          goal: completedHabit.goal,
          unit: completedHabit.unit,
          currentProgress: currentProgress < 0 ? 0 : currentProgress, // Adjust as necessary
          lastCompleted: completed ? today : completedHabit.lastCompleted,
          streak,
        };
        result = await HabitService.updateProgressiveHabit(
          input as CreateProgressiveHabitInput,
        );
        break;
      case HabitType.ACTIVITY:
        completedHabit = habit as ActivityHabit;
        const isNewWeek =
          !completedHabit.lastCompleted ||
          new Date(today) >=
            getNextWeekStartDate(new Date(completedHabit.lastCompleted));
        console.log(isNewWeek);
        const completedSessions = isNewWeek
          ? 1
          : completedHabit.completedSessions
            ? completedHabit.completedSessions + 1
            : 1;
        streak =
          isNewWeek && completedSessions < completedHabit.sessionsPerWeek
            ? 0
            : completedSessions === completedHabit.sessionsPerWeek
              ? (completedHabit.streak ?? 0) + 1
              : completedHabit.streak ?? 1;
        input = {
          id: completedHabit.id,
          name: completedHabit.name,
          type: completedHabit.type,
          sessionsPerWeek: completedHabit.sessionsPerWeek,
          completedSessions,
          lastCompleted: today,
          streak: streak,
        };
        result = await HabitService.updateActivityHabit(
          input as CreateActivityHabitInput,
        );
        break;
      case HabitType.GENERAL:
        completedHabit = habit as GeneralHabit;
        if (
          habit.lastCompleted &&
          isConsecutiveDay(today, habit.lastCompleted)
        ) {
          streak += 1;
        } else {
          streak = 1; // Reset streak if not consecutive
        }
        input = {
          id: completedHabit.id,
          name: completedHabit.name,
          type: completedHabit.type,
          completed: !completedHabit.completed, // Adjust as necessary
          lastCompleted: today,
          streak,
        };
        result = await HabitService.updateGeneralHabit(
          input as CreateGeneralHabitInput,
        );
        break;
    }
    console.log('Habit updated:', result);
  };

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
          {habits
            .sort((a, b) => {
              if (a.lastCompleted === today && b.lastCompleted !== today) {
                return 1;
              } else if (
                a.lastCompleted !== today &&
                b.lastCompleted === today
              ) {
                return -1;
              }
              return 0;
            })
            .map((habit, index) => (
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
