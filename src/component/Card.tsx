import React, { FC } from "react";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({
  titleLeft,
  titleRight,
  children,
  width,
  height,
}) => {
  return (
    <div className="flex items-start justify-center h-screen mt-12">
      <div
        className="bg-white rounded-lg shadow-lg p-8 "
        style={{ width: width, height: height }}
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold">{titleLeft}</h4>
          <h4 className="text-xl font-bold">{titleRight}</h4>
        </div>
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};

export default Card;
