import React from "react";
import "./TopNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function TopNavbar(props) {
  return (
    <div className="top-navbar">
      <FontAwesomeIcon onClick={props.onClick?props.onClick:{}} icon={faBars} color="black" />
    </div>
  );
}
