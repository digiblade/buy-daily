import React from 'react'
import "./Dashboard.css"
import TopNavbar from '../Navbar/TopNavbar'
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sideboard"></div>
      <div className="main-content">
        <TopNavbar></TopNavbar>
      </div>
    </div>
  )
}
