import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ExamLogin from "./MainApp/ExamPortal/Factory/Page/Auth/ExamLogin";
import PortalFront from "./MainApp/ExamPortal/PortalFront";
export default function RoutePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Hi" element={"Hi"}></Route>
        <Route path="/exam-portal" element={<PortalFront/>}></Route>
        <Route path="/exam-login" element={<ExamLogin/>}></Route>
      </Routes>
    </Router>
  );
}
