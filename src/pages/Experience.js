import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";


function Experience() {
  return (
    <div
    className="experience-container"
    style={{
      height: "100vh", 
      backgroundColor: "#808080", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: "20px", 
    }}
    >
    <div style={{ width: "100%", height: "100%" }}>
    <VerticalTimeline
      lineColor="#3e497a"
      style={{
        height: "100%", 
        overflowY: "auto", 
      }}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013 - 2019"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          King ecgbert school
        </h3>
        <p> </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2019 - 2021"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Longley Park college
        </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p> Information Technology extended diploma level 3</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Sheffield Hallam University
        </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p> Software Engineer</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">I-Mobile</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p> </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Deliveries4u
        </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p> Amazon Delivery Driver</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024 - present"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Evri
        </h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>Temporary</p>
        <p> Warehouseman</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
</div>
);
}
export default Experience;
