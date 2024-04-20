import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import InventoryIcon from '@mui/icons-material/Inventory';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './INavBar.css';

export const INavData = [
    {
        title: 'Dashboard',
        icon: <GridViewRoundedIcon />,
        link: '/inventory/dashboard',
    },
    {
        title: 'All Inventory',
        icon: <InventoryIcon />,
        link: '/items',
    },
    {
        title: 'Add Inventory',
        icon: <AddCircleOutlineIcon />,
        link: '/insertitem',
    },
    {
        title: 'Download Report',
        icon: <CompareArrowsIcon />, 
        link: '/items',
    },   
];
