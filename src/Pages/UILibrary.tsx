import React from "react";
import { Link } from "react-router-dom";
import { BiAnalyse } from "react-icons/bi";

const UILibraary = () => {
  return (
    <div className="pt-8">
      <nav className="flex flex-col">
        <Link
          to="gpi/storybook/button"
          className="mb-2 p-2  text-white shadow rounded hover:text-green-600 hover:shadow-2xl"
        >
          <div className="flex gap-2 items-center">
            <BiAnalyse className="text-orange-600" /> Button Component
          </div>
        </Link>
        <Link
          to="gpi/storybook/inputs"
          className="mb-2 p-2 text-white  shadow rounded hover:text-green-600 hover:shadow-2xl"
        >
          <div className="flex gap-2 items-center">
            <BiAnalyse className="text-orange-600" /> Input component
          </div>
        </Link>
        <Link
          to="gpi/storybook/breadcrumb"
          className="mb-2 p-2 text-white shadow rounded hover:text-green-600 hover:shadow-2xl "
        >
          <div className="flex gap-2 items-center">
            <BiAnalyse className="text-orange-600" /> Bredcrumb Component
          </div>
        </Link>
        <Link
          to="gpi/storybook/header"
          className="mb-2 p-2 text-white shadow rounded hover:text-green-600 hover:shadow-2xl "
        >
          <div className="flex gap-2 items-center">
            <BiAnalyse className="text-orange-600" /> Header Component
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default UILibraary;
