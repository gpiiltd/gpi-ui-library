import React from "react";

import Button from "../component/Button";
import Typography from "../component/Typography";
import { TypographyVariant } from "../component/types";

const ViewButton = () => {
  return (
    <div>
      <Typography variant={TypographyVariant.TITLE} className="text-black">
        Button
      </Typography>
      <div className="pt-6">
        <Button text="Hello world" bg_color="green" text_color="white" />
      </div>
    </div>
  );
};

export default ViewButton;
