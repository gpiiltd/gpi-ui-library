import React from "react";
import UILibraary from "./Pages/UILibrary";
import { BrowserRouter as Router,Routes } from "react-router-dom";
import Typography from "./component/Typography";
import { TypographyVariant } from "./component/types";
import { CiStopSign1 } from "react-icons/ci";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-[1fr_3fr] h-screen ">
        <div className="bg-gray-700 px-6 py-8">
          <div className="flex gap-2 items-center">
            <CiStopSign1 className="text-green-600 text-6xl" />
            <Typography
              variant={TypographyVariant.TITLE}
              className="text-white"
            >
              Story Book
            </Typography>
          </div>
          <UILibraary />
        </div>

        <div className="w-3/4 p-8 pl-15 bg-white">
        <Typography
              variant={TypographyVariant.TITLE}
            >  Components 
            </Typography>
          <Routes>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
