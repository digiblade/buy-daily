import * as React from 'react'
import "./Dashboard.css"
import TopNavbar from '../Navbar/TopNavbar'
import Drawer from '../Drawer/Drawer'
export default function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(true)
  const changeState = ()=>{
    console.log(isOpen)
    setIsOpen(!isOpen)
  }
  return (
    <div className="dashboard">
      <Drawer className={isOpen?"sideboard":"sideboard-close"}></Drawer>
      <div className="main-content">
        <TopNavbar onClick={changeState}></TopNavbar>
      </div>
    </div>
  )
}
