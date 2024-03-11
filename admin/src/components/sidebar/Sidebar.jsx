import React, { useState } from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  List,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AddToQueue,
  QueuePlayNext,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" onClick={() => handleLinkClick("/")}>
              <li className={`sidebarListItem ${activeLink === '/' ? 'active' : ''}`}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="link" onClick={() => handleLinkClick("/analytics")}>
              <li className={`sidebarListItem ${activeLink === '/analytics' ? 'active' : ''}`}>
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link" onClick={() => handleLinkClick("/sales")}>
              <li className={`sidebarListItem ${activeLink === '/sales' ? 'active' : ''}`}>
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link" onClick={() => handleLinkClick("/users")}>
              <li className={`sidebarListItem ${activeLink === '/users' ? 'active' : ''}`}>
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link" onClick={() => handleLinkClick("/movies")}>
              <li className={`sidebarListItem ${activeLink === '/movies' ? 'active' : ''}`}>
                <PlayCircleOutline className="sidebarIcon" />
                Movies
              </li>
            </Link>
            <Link to="/lists" className="link" onClick={() => handleLinkClick("/lists")}>
              <li className={`sidebarListItem ${activeLink === '/lists' ? 'active' : ''}`}>
                <List className="sidebarIcon" />
                Lists
              </li>
            </Link>
            <Link to="/newMovie" className="link" onClick={() => handleLinkClick("/newMovie")}>
              <li className={`sidebarListItem ${activeLink === '/newMovie' ? 'active' : ''}`}>
                <AddToQueue className="sidebarIcon" />
                Add Movie
              </li>
            </Link>
            <Link to="/newList" className="link" onClick={() => handleLinkClick("/newList")}>
              <li className={`sidebarListItem ${activeLink === '/newList' ? 'active' : ''}`}>
                <QueuePlayNext className="sidebarIcon" />
                Add List
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className={`sidebarListItem ${activeLink === '/mail' ? 'active' : ''}`}>
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className={`sidebarListItem ${activeLink === '/feedback' ? 'active' : ''}`}>
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className={`sidebarListItem ${activeLink === '/messages' ? 'active' : ''}`}>
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className={`sidebarListItem ${activeLink === '/manage' ? 'active' : ''}`}>
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className={`sidebarListItem ${activeLink === '/staffAnalytics' ? 'active' : ''}`}>
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className={`sidebarListItem ${activeLink === '/reports' ? 'active' : ''}`}>
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
