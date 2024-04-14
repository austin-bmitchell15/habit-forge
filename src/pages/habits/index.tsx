import CreateHabitModal from '@/components/CreateHabitModal';
import HabitService from '@/services/HabitService';
import { JWT, UserAttributeKey } from '@aws-amplify/auth';
import { Button, Dialog, DialogHeader } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import UserService from '@/services/UserService';

export default function Habits() {
  const [showHabitModal, setShowHabitModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [habits, setHabits] = useState<Promise<any>[]>([]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <CreateHabitModal open={showHabitModal} setOpen={setShowHabitModal} />
      <Button variant="text" onClick={() => setShowHabitModal(true)}>
        Create Habit
      </Button>
    </div>
  );
}
