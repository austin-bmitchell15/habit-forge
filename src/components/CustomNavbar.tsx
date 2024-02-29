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

  interface CustomNavbarProps {
    selected: number;
    onChangeSelected: Function;
  }
   
  export default function CustomNavbar({selected, onChangeSelected} : CustomNavbarProps) {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Austin's Forge
          </Typography>
        </div>
        <List>
          <ListItem selected={selected===1} onClick={() => onChangeSelected(1)}>
            <ListItemPrefix>
              <FitnessCenterRoundedIcon/>
            </ListItemPrefix>
            Workout Planner
          </ListItem>
          <ListItem selected={selected===2} onClick={() => onChangeSelected(2)}>
            <ListItemPrefix>
              <CalendarMonthOutlinedIcon/>
            </ListItemPrefix>
            Habit Tracker
          </ListItem>
          <ListItem selected={selected===3} onClick={() => onChangeSelected(3)}>
            <ListItemPrefix>
              <AccountCircleOutlinedIcon/>
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem selected={selected===4} onClick={() => onChangeSelected(4)}>
            <ListItemPrefix>
              <LogoutOutlinedIcon/>
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }