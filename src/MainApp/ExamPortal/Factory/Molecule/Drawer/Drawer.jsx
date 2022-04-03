import React from "react";
import "../Dashboard/Dashboard.css";
import "./Drawer.css"
export default function Drawer(props) {
  return (
    <div className={props.className}>
        <div className="drawer-header">
            <div className="drawer-logo">Buy daily Exam</div>
        </div>
        
        <div className="pages">
            <div className="page">
                dashboard
            </div>
        </div>
    </div>
  );
}
