import React from 'react'
import {Link} from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';

function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/*<!-- Sidebar - Brand -->*/}
<div className="sidebar-brand d-flex align-items-center justify-content-center" >
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</div>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider my-0"/>

{/*<!-- Nav Item - Dashboard -->*/}
<Link to='dashboard'>
<li className="nav-item active">
    <div className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"><SpeedIcon/></i>
        <span>Dashboard</span></div>
</li>
</Link>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider"/>

{/*<!-- Heading -->*/}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu -->*/}
<Link to='component'>
<li className="nav-item">
    <div className="nav-link collapsed" href="{javascript(void)}" dataToggle="collapse" dataTarget="#collapseTwo"
        ariaExpanded="true" ariaControls="collapseTwo">
        <i className="fas fa-fw fa-cog"><SettingsIcon/></i>
        <span>Components</span>
    </div>
    
</li>
</Link>

{/* <!-- Nav Item - Utilities Collapse Menu -->*/}
<Link to='utilities'>
<li className="nav-item">
    <div className="nav-link collapsed" href="{javascript(void)}" data-toggle="collapse" data-target="#collapseUtilities"
        ariaExpanded="true" ariaControls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"><BuildIcon/></i>
        <span>Utilities</span>
    </div>
    
</li>
</Link>


<hr className="sidebar-divider"/>

<div className="sidebar-heading">
                Addons
            </div>
<Link to='page'>
            <li className="nav-item">
                <div className="nav-link collapsed" href="{javascript(void)}" data-toggle="collapse" data-target="#collapsePages"
                    ariaExpanded="true" ariaControls="collapsePages">
                    <i className="fas fa-fw fa-folder"><FolderOpenIcon/></i>
                    <span>Pages</span>
                </div>
                
            </li>
            </Link>

            <Link to='charts'>
            <li className="nav-item">
                <div className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"><BarChartIcon/></i>
                    <span>Charts</span></div>
            </li>
            </Link>

            <Link to='tables'>
            <li className="nav-item">
                <div className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"><BackupTableIcon/></i>
                    <span>Tables</span></div>
            </li>
            </Link>

</ul>
  </>
  
}

export default Sidebar