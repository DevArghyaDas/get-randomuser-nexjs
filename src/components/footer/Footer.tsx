import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 fixed bottom-0 border-t border-default-400 w-full flex justify-center backdrop-blur-md bg-default-100/60">
      <span>
        &copy; {new Date().getFullYear()} RandomUser App. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
