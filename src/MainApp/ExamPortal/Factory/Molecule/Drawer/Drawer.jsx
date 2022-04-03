import React from "react";
import "../Dashboard/Dashboard.css";
import "./Drawer.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Drawer(props) {
  const { pagename } = useParams();
  return (
    <div className={props.className}>
      <div className="drawer-header">
        <div className="drawer-logo">Buy daily Exam</div>
      </div>

      <div className="pages-section">
        {props.pages
          ? props.pages.map((page, index) => {
              return (
                <div
                  key={index}
                  className={`page ${
                    (pagename === undefined && index === 0) ||
                    pagename === page.url
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="link-area" to={`/exam-portal/${page.url}`}>
                    {page.pageName}
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
