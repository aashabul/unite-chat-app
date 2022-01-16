import React from "react";
import { useState } from "react";
import { Nav, Tab, TabContent } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
// import "bootstrap/dist/css/bootstrap.min.css";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function SideBar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  return (
    <div
      style={{ width: "250px" }}
      className="display-flex flex-direction-column"
    >
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent
          style={{
            borderRight: "1px solid #C1C1C1",
            flexGrow: 1,
            overflow: "auto",
            height: "100%",
          }}
        >
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations></Conversations>
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts></Contacts>
          </Tab.Pane>
        </TabContent>
      </Tab.Container>
    </div>
  );
}
