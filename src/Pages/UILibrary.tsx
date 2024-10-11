import React from "react";
import { NavLink } from "react-router-dom";
import { BiAnalyse } from "react-icons/bi";

const UILibraary = () => {
  return (
    <div className="pt-8">
      <nav className="flex flex-col">
        <NavLink
          to="gpi/storybook/button"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Button Component
        </NavLink>

        <NavLink
          to="gpi/storybook/inputs"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Input Component
        </NavLink>

        <NavLink
          to="gpi/storybook/breadcrumb"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Breadcrumb Component
        </NavLink>

        <NavLink
          to="gpi/storybook/header"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Header Component
        </NavLink>

        <NavLink
          to="gpi/storybook/modal"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Modal Component
        </NavLink>

        <NavLink
          to="gpi/storybook/card"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Card Component
        </NavLink>
        <NavLink
          to="gpi/storybook/footer"
          className={({ isActive }) =>
            `mb-2 p-2 shadow rounded flex gap-2 items-center ${
              isActive ? "bg-green-600 text-white" : "text-white hover:text-green-600 hover:shadow-2xl"
            }`
          }
        >
          <BiAnalyse className="text-orange-600" /> Footer Component
        </NavLink>
      </nav>
    </div>
  );
};

export default UILibraary;
