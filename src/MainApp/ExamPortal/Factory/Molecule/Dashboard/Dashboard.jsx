import * as React from 'react'
import "./Dashboard.css"
import TopNavbar from '../Navbar/TopNavbar'
import Drawer from '../Drawer/Drawer'
import DashboardPanel from '../Panel/DashboardPanel'
export default function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [pages, setPages] =React.useState([])
  React.useEffect(()=>{
    let pageList = [
      {
        pageName:"Dashboard",
        url:"exam-portal"
      },
      {
        pageName:"Student Data",
        url:"exam-student-data"
      },
      {
        pageName:"Exam Data",
        url:"exam-data"
      },
      {
        pageName:"Result Data",
        url:"exam-result-data"
      }
    ];
    setPages(pageList)
  },[])
  const changeState = ()=>{
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div className="dashboard">
      <Drawer className={isOpen?"sideboard":"sideboard-close"} pages={pages}></Drawer>
      <div className="main-content">
        <TopNavbar onClick={changeState}></TopNavbar>
        <DashboardPanel pages={pages}></DashboardPanel>
      </div>
    </div>
  )
}
