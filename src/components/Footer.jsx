import React from "react";

export const Footer = () => {
  return (
    <div className="text-center space-y-4 py-4">
      <ul className="flex gap-x-2 justify-center text-xs md:text-sm flex-wrap">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQs</li>
        <li>About</li>
      </ul>
      <div className="h-[2px] bg-slate-300"></div>
      <p className="text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Company, Inc
      </p>
    </div>
  );
};
