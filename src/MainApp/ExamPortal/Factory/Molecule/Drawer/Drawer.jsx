import React from "react";
import "../Dashboard/Dashboard.css";
import "./Drawer.css"
import { Link } from "react-router-dom";
export default function Drawer(props) {
  return (
    <div className={props.className}>
        <div className="drawer-header">
            <div className="drawer-logo">Buy daily Exam</div>
        </div>
        
        <div className="pages">
            <div className="" >
               <Link className="" to="/">dashboard</Link> 
            </div>
        </div>
    </div>
  );
}
