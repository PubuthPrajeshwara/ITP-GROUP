import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CarRepairIcon from '@mui/icons-material/CarRepair';

export const NavBarData = [
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