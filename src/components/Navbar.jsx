import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        🍕 Home
      </a>
      {token ? (
        <>
          <button className="btn btn-outline-success" type="button">
            🔓 Profile
          </button>
          <button className="btn btn-outline-danger" type="button">
            🔒 Logout
          </button>
        </>
      ) : (
        <>
          <button className="btn btn-outline-primary" type="button">
            🔐 Login
          </button>
          <button className="btn btn-outline-secondary" type="button">
            🔐 Register
          </button>
        </>
      )}
      <button className="btn btn-outline-info" type="button">
        🛒 Total: {total.toLocaleString()}$
      </button>
    </nav>
  );
};

export default Navbar;
