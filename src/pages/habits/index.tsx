import CreateHabitModal from "@/components/CreateHabitModal";
import { Button, Dialog, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";

export default function Habits() {
  const [showHabitModal, setShowHabitModal] = useState(false);
  return (
    <div>
      <CreateHabitModal open={showHabitModal} handler={setShowHabitModal} />
      <Button variant="text" onClick={() => setShowHabitModal(true)}>
        Create Habit
      </Button>
    </div>
    
  )
}
