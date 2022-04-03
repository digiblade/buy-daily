import React from "react";
import { useParams } from "react-router-dom";
import DashboardRouteMap from "./DashboardRouteMap";
export default function DashboardPanel(props) {
  const { pagename } = useParams();
  const [selectedPage, setSelectedPage] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, [pagename]);
  React.useEffect(() => {
    getData();
  }, [props.pages]);
  const getData = () => {
    let pageData = [];
    ;
    if (pagename === undefined) {
      pageData = props.pages && props.pages.length > 0 ? [props.pages[0]] : [];
    } else {
      pageData = props.pages.filter((page, index) => page.url === pagename);
    }
    setSelectedPage(pageData);
  };
  return (
    <div>
      {selectedPage.map((page, index) => {
        return DashboardRouteMap(page.url, page);
      })}
    </div>
  );
}
