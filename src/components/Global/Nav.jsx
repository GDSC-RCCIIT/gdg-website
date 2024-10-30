"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/app/images/gdsc-logo.png";
import Image from "next/image";

const Nav = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menus = {
    "Projects & Events": {
      description: "Explore projects, events, and hackathons we’re hosting.",
      items: [
        {
          name: "Projects",
          path: "/Projects",
          description: "Discover our latest projects",
        },
        {
          name: "Events",
          path: "/Events",
          description: "Join exciting events",
        },
        {
          name: "Hackathons",
          path: "/Hackathon",
          description: "Participate in hackathons",
        },
      ],
    },
    "Resources & FAQ": {
      description: "Access resources, tools, and connect with our community.",
      items: [
        {
          name: "Tech Toolkits Hub",
          path: "/TechToolkits",
          description: "Find essential developer toolkits",
        },
        {
          name: "Teams & Gallery",
          path: "/TeamsGallery",
          description: "Explore team projects and galleries",
        },
        {
          name: "FAQ & Forum",
          path: "/FAQsForum",
          description: "Get answers to your questions",
        },
        {
          name: "Resources",
          path: "/Resources",
          description: "Access guides and documents",
        },
        {
          name: "Connect To Local Dev",
          path: "/localdev",
          description: "Link up with local developers",
        },
      ],
    },
    Careers: {
      description: "Find out about career opportunities and success stories.",
      items: [
        { name: "Careers", path: "/careers", description: "Join our team" },
        {
          name: "Stories & Achievements",
          path: "/Stories-Achievements",
          description: "Read success stories",
        },
      ],
    },
  };

  return (
    <header style={headerStyles}>
      <div style={leftStyle}>
        <Link href="/">
          <div className="flex flex-row items-center">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src={Logo}
                alt="GDSC Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
            </div>
            <div style={gdscTextContainer} className="ml-2 flex flex-col">
              <span
                style={gdscTitle}
                className="text-base sm:text-lg font-bold text-gray-900"
              >
                GDSC RCCIIT
              </span>
              <span
                style={gdscLocation}
                className="text-xs text-gray-600 hidden sm:block"
              >
                Kolkata, West Bengal
              </span>
            </div>
          </div>
        </Link>
      </div>
      <nav style={navStyles}>
        <div style={menuStyles}>
          <Link href="/About">About</Link>
        </div>
        {Object.keys(menus).map((menu) => (
          <div
            key={menu}
            style={menuStyles}
            onMouseEnter={() => setHoveredMenu(menu)}
            onMouseLeave={() => {
              setHoveredMenu(null);
              setHoveredItem(null);
            }}
          >
            <span>{menu}</span>
            {hoveredMenu === menu && (
              <div style={submenuStyles}>
                {menus[menu].items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    style={submenuItemStyle}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                    <p style={descriptionStyle}>{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <div style={menuStyles}>
          <Link href="/GeminiAI">Gemini</Link>
        </div>
      </nav>
      <div style={rightStyle}>
        <Link href="/SignUp" style={joinButtonStyle}>
          Join GDSC
        </Link>
      </div>
    </header>
  );
};

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  background: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
};

const logoContainer = {
  position: "relative",
  height: "40px",
  width: "40px",
  marginRight: "0.5rem",
};

const gdscTextContainer = {
  display: "flex",
  flexDirection: "column",
};

const gdscTitle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#333",
};

const gdscLocation = {
  fontSize: "0.8rem",
  color: "#555",
};

const navStyles = {
  display: "flex",
  gap: "2rem",
};

const menuStyles = {
  position: "relative",
  cursor: "pointer",
};

const submenuStyles = {
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "0.5rem",
  zIndex: 30,
  width: "250px",
};

const submenuItemStyle = {
  display: "block",
  padding: "0.5rem 1rem",
  color: "#333",
  textDecoration: "none",
};

const descriptionStyle = {
  color: "#666",
  fontSize: "0.85rem",
};

const rightStyle = {
  fontWeight: "bold",
};

const joinButtonStyle = {
  backgroundColor: "#0070f3",
  color: "#fff",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  textDecoration: "none",
};

export default Nav;
