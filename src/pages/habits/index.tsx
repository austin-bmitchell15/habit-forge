import CreateHabitModal from '@/components/CreateHabitModal';
import HabitService from '@/services/HabitService';
import { JWT, UserAttributeKey } from '@aws-amplify/auth';
import { Button, Dialog, DialogHeader } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import UserService from '@/services/UserService';
import HabitList from '@/components/HabitList/HabitList';
import { Habit } from '@/API';

export default function Habits() {
  const [showHabitModal, setShowHabitModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      setLoading(true);
      setError(null);

      try {
        const habits = await HabitService.getHabits();
        setHabits(habits.data.listHabits.items);
        console.log(habits);
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
  }

  else {
    return (
      <div className='flex flex-col flex-grow space-y-4 p-4'>
        <CreateHabitModal open={showHabitModal} setOpen={setShowHabitModal} />
        <HabitList habits={habits} />
        <Button variant="text" onClick={() => setShowHabitModal(true)}>
          Create Habit
        </Button>
      </div>
    );
  }
  
}
