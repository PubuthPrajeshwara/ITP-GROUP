import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

export const NavBarData = [
    {
        title: 'Dashboard',
        icon: <GridViewRoundedIcon />,
        link: '/service/dashboard',
    },
    {
        title: 'Manage Service',
        icon: <CarRepairIcon />,
        link: '/service',
    },
    {
        title: 'Add Service',
        icon: <AddCircleOutlineIcon />,
        link: '/service/add',       
    }
]