import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = 220;

const Sidebar = () => {
  const navigate = useNavigate();

  const goToHomepage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Example user data (replace with real data if available)
  const user = {
    name: "John Doe",
    avatar: null, // You can use a URL or null for placeholder
  };

  return (
    <aside
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: SIDEBAR_WIDTH,
        background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        borderRight: "1px solid #e5e7eb",
        padding: "36px 20px 40px 20px", // increased bottom padding
        fontFamily: "Segoe UI, Arial, sans-serif",
        boxShadow: "2px 0 12px rgba(0,0,0,0.06)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Logo/Icon */}
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: "#e0e7ef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2d3142"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#2d3142",
            marginBottom: 36,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Media Collection
        </div>
        <button
          onClick={goToHomepage}
          style={{
            width: "100%",
            padding: "13px 0",
            fontSize: 17,
            borderRadius: 10,
            border: "none",
            background: "#e0e7ef",
            color: "#22223b",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
            marginBottom: 12,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#d1d5db";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#e0e7ef";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
            e.currentTarget.style.transform = "none";
          }}
        >
          Homepage
        </button>
      </div>
      {/* User Profile at the bottom */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 24,
          marginBottom: 8,
          paddingBottom: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#d1d5db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              color: "#5c6370",
              flexShrink: 0,
            }}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5c6370"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4" />
              </svg>
            )}
          </div>
          <div
            style={{
              fontSize: 15,
              color: "#2d3142",
              fontWeight: 500,
              textAlign: "left",
              marginBottom: 0,
              whiteSpace: "nowrap",
            }}
          >
            {user.name}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
