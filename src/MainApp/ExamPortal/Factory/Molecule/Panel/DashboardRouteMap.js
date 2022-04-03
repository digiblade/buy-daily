
import React from "react";
import Dashboard from "../../Page/Dashboard/Dashboard";
import StudentData from "../../Page/Student/StudentData";
const DashboardRouteMap = (route,pageData)=>{
  
    switch(route){
        case "exam-portal":
            return <Dashboard pageData={pageData}/>
        case "exam-student-data":
            return <StudentData pageData={pageData}/>
        default:
            return <h1>404 route not found</h1>
    }
}
export default  DashboardRouteMap;