import React from "react";
import { Link } from "react-router-dom";
import active_progress_indicator from '../../assets/active_progress_indicator.svg'
import inactive_progress_indicator from '../../assets/inactive_progress_indicator.svg'
import { BreadcrumbProps } from "../types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-wrap mb-2">
      {steps.map((step, index) => (
        <span key={index} className="mr-1">
          {index <= currentStep ? (
            <Link to={step.route}>
              <img
                src={active_progress_indicator}
                alt="Completed Step"
                className="h-6"
              />
            </Link>
          ) : (
            <img
              src={inactive_progress_indicator}
              alt="Pending Step"
              className="h-6"
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;