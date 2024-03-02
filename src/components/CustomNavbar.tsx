import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
  import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
  import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
  import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
  import { useState } from "react";
  import { useRouter} from 'next/router'

   
  export default function CustomNavbar() {
    const router = useRouter()
    return (
      <Card className="flex h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Austin's Forge
          </Typography>
        </div>
        <List>
          <ListItem onClick={() => router.push('/workout-planner')}>
            <ListItemPrefix>
              <FitnessCenterRoundedIcon/>
            </ListItemPrefix>
            Workout Planner
          </ListItem>
          <ListItem onClick={() => router.push('/habits')}>
            <ListItemPrefix>
              <CalendarMonthOutlinedIcon/>
            </ListItemPrefix>
            Habit Tracker
          </ListItem>
          <ListItem onClick={() => router.push('/profile')}>
            <ListItemPrefix>
              <AccountCircleOutlinedIcon/>
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem onClick={() => router.push('/')}>
            <ListItemPrefix>
              <LogoutOutlinedIcon/>
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }