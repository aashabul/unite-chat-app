import React from "react";
import SideBar from "./SideBar";

export default function DashBoard({ id }) {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <SideBar id={id} />
    </div>
  );
}
