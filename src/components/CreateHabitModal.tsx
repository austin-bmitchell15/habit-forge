import { Habit } from '@/utils/types/habit';
import { Button, Card, CardBody, CardFooter, Checkbox, Dialog, DialogHeader, DialogProps, Input, Option, Select, Typography } from '@material-tailwind/react';
import { handler } from '@material-tailwind/react/types/components/dialog';
import React, { useState } from 'react'

interface CreateHabitModalProps {
  open : boolean;
  handler : handler;
}

function CreateHabitModal(props: CreateHabitModalProps) {
  const { open, handler } = props
  const habitValues = {
    type : String
  }

  const [habitType, setHabitType] = useState("general")

  return (
    <Dialog open={open} handler={handler}>
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            Create a New Habit
          </Typography>
          <Typography className="-mb-2" variant="h6">
            What type of Habit is this?
          </Typography>
          <Select label="Type of Habit" value={habitType} onChange={(val) => setHabitType(val)}>
            <Option value={Habit.General}>General Habit</Option>
            <Option value={Habit.Progressive}>Progressive Habit</Option>
            <Option value={Habit.Progressive}>Activity Habit</Option>
          </Select>
          {habitType === 'progressive'}
          <Typography className="-mb-2" variant="h6">
            What is the name of the Habit?
          </Typography>
          <Input label="Habit Name" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handler} fullWidth>
            Create
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  )
}

export default CreateHabitModal
