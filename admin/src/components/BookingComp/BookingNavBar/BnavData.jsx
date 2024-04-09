import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

export const BNavData = [
    {
        title: 'Dashboard',
        icon: <GridViewRoundedIcon />,
        link: '/booking/dashboard',
    },
    {
        title: 'Booking requests',
        icon: <CompareArrowsIcon />,
        link: '/booking',
    },
    {
        title: 'All Bookings',
        icon: <BookOnlineIcon />,
        link: '/booking/all',       
    },
    {
        title: 'Add Bookings',
        icon: <AddCircleOutlineIcon />,
        link: '/booking/add',       
    }

]