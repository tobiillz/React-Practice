import React from 'react'
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import WidgetsIcon from '@material-ui/icons/Widgets';
import TocIcon from '@material-ui/icons/Toc';
import ListIcon from '@material-ui/icons/List';

export const SideBarData = [
    {
        title: "Dashboards",
        icon: <DashboardSharpIcon />,
        link: "/Dashborads"
    },
    {
        title: "Layouts",
        icon:  <ListIcon />,
        link: '/Layouts'
    },
    {
        title: "Graphs",
        icon: <AssessmentIcon />,
        link: '/Graphs'
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: '/Mailbox'
    },
    {   title: "Widgets",
        icon: <WidgetsIcon />,
        link: '/Widgets'
    },
    {   title: "Forms",
        icon: <TocIcon />,
        link: '/Forms'
    }      
]
