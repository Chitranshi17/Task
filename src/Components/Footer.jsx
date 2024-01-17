import React from "react";

const Footer = ({ dark }) => {
  return (
    <footer>
      <div
        className={
          dark
            ? "footer d-flex align-items-center justify-content-center bg-info p-2 "
            : "footer d-flex align-items-center justify-content-center bg-dark p-2 "
        }
      >
        <h6
          className={
            dark ? "fs-4 text-dark fw-bold" : " fs-4 text-light fw-bold"
          }
        >
          &copy; TaskTracker
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
