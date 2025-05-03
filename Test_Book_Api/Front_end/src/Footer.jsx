import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-dark text-light text-center py-3 mt-auto"
      role="contentinfo"
    >
      <div className="container">
        <small>&copy; {currentYear} Book Management System. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
