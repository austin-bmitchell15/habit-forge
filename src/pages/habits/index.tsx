import CreateHabitModal from '@/components/HabitModals/CreateHabitModal';
import HabitService from '@/services/HabitService';
import { JWT, UserAttributeKey } from '@aws-amplify/auth';
import { Button, Dialog, DialogHeader } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import UserService from '@/services/UserService';
import HabitCard from '@/components/HabitCard';
import { Habit } from '@/utils/types/habits';

export default function Habits() {
  const [showCreateHabitModal, setShowCreateHabitModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [showEditHabitModal, setShowEditHabitModal] = useState(false);
  const [showDeleteHabitModal, setShowDeleteHabitModal] = useState(false);
  const [showCompleteHabitModal, setShowCompleteHabitModal] = useState(false);

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
  }, []);

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
        <div className="flex flex-col w-full space-y-4 ">
          {habits.map((habit, index) => (
            <HabitCard
              habit={habit}
              key={index}
              showEdit={setShowCompleteHabitModal}
              showDelete={setShowDeleteHabitModal}
              showComplete={setShowCompleteHabitModal}
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
