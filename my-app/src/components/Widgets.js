import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widget-articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
          </div>
        {newsArticle("Ukraine: latest updates")}
        {newsArticle("Stock-market turmoil intensifies")}
        {newsArticle("Vodka make rebrands over Russia link")}
        {newsArticle("How you can support Ukraine")}
        {newsArticle("Hallelujah! Leonard Cohen songs sold")}
    </div>
  );
}

export default Widgets;
