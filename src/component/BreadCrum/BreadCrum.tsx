import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "../types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ steps, currentStep,activeColor = "#00FF00" }) => {
    return (
        <div className="flex flex-wrap mb-2">
          {steps.map((step, index) => (
            <span key={index} className="mr-1">
              <Link to={step.route}>
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8H22"
                    stroke={index <= currentStep ? activeColor : "#DDE5EE"} // Use activeColor prop
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </span>
          ))}
        </div>
      );
};

export default Breadcrumb;
