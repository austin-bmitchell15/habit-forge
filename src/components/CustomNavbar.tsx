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
  import { useRouter } from 'next/router';
  
  export default function CustomNavbar() {
    const router = useRouter();
    const navItems = [
      { icon: FitnessCenterRoundedIcon, label: 'Workout Planner', path: '/workout-planner' },
      { icon: CalendarMonthOutlinedIcon, label: 'Habit Tracker', path: '/habits' },
      { icon: AccountCircleOutlinedIcon, label: 'Profile', path: '/profile' },
      { icon: LogoutOutlinedIcon, label: 'Log Out', path: '/' },
    ];
  
    return (
      <Card className="flex h-[calc(100vh)] w-full max-w-xs pl-4 pt-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-6">
          <Typography variant="h5" color="blue-gray" className="font-bold">
            Austin&apos;s Forge
          </Typography>
        </div>
        <List>
          {navItems.map(({ icon: Icon, label, path }) => (
            <ListItem 
              key={label} 
              className="cursor-pointer hover:bg-blue-gray-100 rounded-lg -mx-4 pb-5"
              onClick={() => router.push(path)}
            >
              <ListItemPrefix className="mr-2">
                <Icon />
              </ListItemPrefix>
              {label}
            </ListItem>
          ))}
        </List>
      </Card>
    );
  }