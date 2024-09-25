import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} style={backButtonStyle}>
        ← Back
      </button>
      <div>{children}</div>
    </div>
  );
};

const backButtonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#007BFF",
  color: "#FFF",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Layout;
