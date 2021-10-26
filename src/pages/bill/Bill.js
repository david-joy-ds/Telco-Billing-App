import React from 'react'
import './bill.css';
import Topbar from  '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import Billbox from '../../components/billbox/Billbox';

export default function Bill() {
    return(
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Billbox />
      </div>
    </div>
    )
  }
