import React from "react";

const Navbar = ({ dark, changeTheme }) => {
  return (
    <nav>
      <div
        className={
          dark ? "navbar px-5 py-4 bg-info" : "navbar px-5 py-4 bg-dark"
        }
      >
        <span>
          <h3 className={dark ? "text-dark" : "text-light"}>Task-Tracker</h3>
        </span>
        <span>
          <button
            className={
              dark
                ? "btn bg-black rounded-0 fw-bold text-light"
                : "btn bg-info   text-dark fw-bold rounded-0"
            }
            onClick={changeTheme}
          >
            {dark ? "Dark Mode" : "Light Mode"}
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
