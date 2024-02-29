import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
  import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
  import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
  import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
   
  export default function DefaultSidebar() {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Austin's Forge
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <FitnessCenterRoundedIcon/>
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <CalendarMonthOutlinedIcon/>
            </ListItemPrefix>
            Habit Tracker
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <AccountCircleOutlinedIcon/>
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <LogoutOutlinedIcon/>
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }